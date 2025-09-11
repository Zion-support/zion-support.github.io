=======

import React from 'react';
import Link from 'next / link';

=======
import React from 'react';

import Link from 'next/link';

import {
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
  CheckCircle;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom
=======
=======
import React from 'react',
import React from 'react';
import Link from 'next/link';>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';


=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 AI & Consciousness'
    services: [
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-platform'
      }
      {
        name: 'AI Emotional Intelligence'
        href: '/ai-emotion-intelligence-platform'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/ai-creativity-orchestrator'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/ai-autonomous-business-manager'
      }
    ]
  }
    title: '⚛️ Quantum & Emerging Tech'
    services: [
      {
        name: 'Quantum Internet Security'
        href: '/quantum-internet-security-gateway'
      }
      {
        name: 'Quantum Learning Accelerator'
        href: '/quantum-learning-accelerator'
      }
      {
        name: 'Quantum Financial Trading'
        href: '/quantum-financial-trading-platform'
      }
      {
        name: 'Quantum Cloud Infrastructure'
        href: '/quantum-cloud-infrastructure'
      }
    ]
  }
  {
    title: '🧬 Biotech & DNA Computing'
    services: [
      {
        name: 'DNA Computing Platform'
        href: '/biotech-dna-computing-platform'
      }
      {
        name: 'Personalized Nutrition'
        href: '/biotech-personalized-nutrition'
      }
      {
        name: 'Predictive Health Analytics'
        href: '/ai-predictive-health-analytics'
      }
      { name: 'Research Automation', href: '/advanced-research-automation' }
    ]
  },  {
    title: '🏙️ Enterprise IT Solutions'
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },      { name: 'DNA Computing Platform', href: '/biotech-dna-computing-platform' }
      { name: 'Personalized Nutrition', href: '/biotech-personalized-nutrition' }
      { name: 'Predictive Health Analytics', href: '/ai-predictive-health-analytics' }
      { name: 'Research Automation', href: '/advanced-research-automation' }
    ]
  }
    title: '🏙️ Enterprise IT Solutions'
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' }
      {
        name: 'Autonomous IT Operations'
        href: '/autonomous-it-operations-center'
      }
      {
        name: 'AI Enterprise Security'
        href: '/ai-powered-enterprise-security'
      }
      {
        name: 'Intelligent Data Governance'
        href: '/intelligent-data-governance'
      }
    ]
  }
    title: '🌌 Space & Metaverse Tech'
    services: [
      {
        name: 'Space Mining Automation'
        href: '/space-mining-automation-platform'
      }
      {
        name: 'Metaverse Digital Reality'
        href: '/metaverse-digital-reality-platform'
      }
      { name: 'Quantum Research Platform', href: '/quantum-research-platform' }
      { name: 'AI Research Assistant', href: '/ai-research-assistant' }
    ]
  }
  {
    title: '🎯 2030 Innovative Micro SAAS'
    services: [
      {
        name: 'AI Business Intelligence Suite 2030'
        href: '/ai-business-intelligence-suite-2030'
      }
      {
        name: 'AI Customer Experience Platform 2030'
        href: '/ai-customer-experience-platform-2030'
      }
      {
        name: 'AI Marketing Automation Suite 2030'
        href: '/ai-marketing-automation-2030'
      }
      {
        name: 'AI HR Management Suite 2030'
        href: '/ai-hr-management-suite-2030'
      }
    ]
  },];      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030' }
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030' }
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030' }
      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030' }
    ]
  }
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
  Globe,;
  Zap,;
  Brain,;
  Atom,;
  Rocket,;
  Shield,;
  Cpu,;
  Target,;
  Microscope,;
  Users,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Youtube,;
  Github,;
  ArrowRight,;
  Heart,;
  Star,;
  Award,;
  CheckCircle,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, ;
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle;

const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};

const serviceCategories = [;
  {;
    title: '🚀 AI & Consciousness',;
    services: [;
      {;
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-platform',;
      },;
      {;
        name: 'AI Emotional Intelligence',;
        href: '/ai-emotion-intelligence-platform',;
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
    title: '⚛️ Quantum & Emerging Tech',;
    services: [;
      {;
        name: 'Quantum Internet Security',;
        href: '/quantum-internet-security-gateway',;
      },;
      {;
        name: 'Quantum Learning Accelerator',;
        href: '/quantum-learning-accelerator',;
      },;
      {;
        name: 'Quantum Financial Trading',;
        href: '/quantum-financial-trading-platform',;
      },;
      {;
        name: 'Quantum Cloud Infrastructure',;
        href: '/quantum-cloud-infrastructure',;
      },;
    ],;
  },;
  {;
    title: '🧬 Biotech & DNA Computing',;
    services: [;
      {;
        name: 'DNA Computing Platform',;
        href: '/biotech-dna-computing-platform',;
      },;
      {;
        name: 'Personalized Nutrition',;
        href: '/biotech-personalized-nutrition',;
      },;
      {;
        name: 'Predictive Health Analytics',;
        href: '/ai-predictive-health-analytics',;
      },;
      { name: 'Research Automation', href: '/advanced-research-automation' },;
    ],;
  },  {;
    title: '🏙️ Enterprise IT Solutions',;
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },      { name: 'DNA Computing Platform', href: '/biotech-dna-computing-platform' },;
      { name: 'Personalized Nutrition', href: '/biotech-personalized-nutrition' },;
      { name: 'Predictive Health Analytics', href: '/ai-predictive-health-analytics' },;
      { name: 'Research Automation', href: '/advanced-research-automation' }
    ];
  };
    title: '🏙️ Enterprise IT Solutions',;
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },;
      {;
        name: 'Autonomous IT Operations',;
        href: '/autonomous-it-operations-center',;
      },;
      {;
        name: 'AI Enterprise Security',;
        href: '/ai-powered-enterprise-security',;
      },;
      {;
        name: 'Intelligent Data Governance',;
        href: '/intelligent-data-governance',;
      },;
    ],;
  },;
    title: '🌌 Space & Metaverse Tech',;
    services: [;
      {;
        name: 'Space Mining Automation',;
        href: '/space-mining-automation-platform',;
      },;
      {;
        name: 'Metaverse Digital Reality',;
        href: '/metaverse-digital-reality-platform',;
      },;
      { name: 'Quantum Research Platform', href: '/quantum-research-platform' },;
      { name: 'AI Research Assistant', href: '/ai-research-assistant' },;
    ],;
  },;
  {;
    title: '🎯 2030 Innovative Micro SAAS',;
    services: [;
      {;
        name: 'AI Business Intelligence Suite 2030',;
        href: '/ai-business-intelligence-suite-2030',;
      },;
      {;
        name: 'AI Customer Experience Platform 2030',;
        href: '/ai-customer-experience-platform-2030',;
      },;
      {;
        name: 'AI Marketing Automation Suite 2030',;
        href: '/ai-marketing-automation-2030',;
      },;
      {;
        name: 'AI HR Management Suite 2030',;
        href: '/ai-hr-management-suite-2030',;
      },;
    ],;
  },];      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030' },;
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030' },;
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030' },;


      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030' }
    ];
  }

=======
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Case Studies', href: '/case - studies' },
  { name: 'Blog', href: '/blog' },

  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
                  </a>;
                </div>;
              </div>;
            </div>;

            {/* Service Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Our Services</span>
              </h4>
=======
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2030 Future Technology</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies.
                Transforming businesses through innovative solutions and intelligent automation.
              </p>
              {/* Contact Info */}              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}

export default function UltraFuturisticFooter2030() {
  return (

                    {contactInfo.website.replace('https://', '')}

                    {contactInfo.website.replace('https://', '')}

=======


                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

=======

            <div className="space-y-6">;
              <div className="flex items-center space-x-3">;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">;
                  <Zap className="w-6 h-6 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text-sm text-gray-400">2030 Future Technology</p>;
                </div>;
              </div>;
              <p className="text-gray-300 text-sm leading-relaxed">;
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. ;
                Transforming businesses through innovative solutions and intelligent automation.;
              </p>;
              {/* Contact Info */}


                <span>Our Services</span>
              </h4>
              <div className='grid grid-cols-1 gap-4'>
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className='space-y-2'>
                    <h5 className='text-sm font-medium text-purple-300'>
                      {category.title}
                    </h5>
                    <div className='space-y-1'>                      {category.services.map((service, serviceIndex) => (
=======
            {/* Service Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Our Services</span>
            {/* Quick Links */}


                ))}

            {/* Quick Links */}
            <div className='space-y-6'>
              <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>
                <Target className='w-5 h-5 text-cyan-400' />
                <span>Quick Links</span>
              </h4>
              <div className='space-y-2'>                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group'
                  >
                    <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />                    <span>{link.name}</span>            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>;
              <div className='space-y-2'>;
                <h5 className='text-sm font-medium text-cyan-300'>Company</h5>                {companyInfo && companyInfo.map((link, index) => (;
=======
=======
              </div>
            </div>

              </div>;
            </div>;


=======


            {/* Quick Links */}


                ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
              <div className='space-y-2'>;
                <h5 className='text-sm font-medium text-cyan-300'>Company</h5>                {companyInfo && companyInfo.map((link, index) => (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-cyan-300">Company</h5>
                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
              {/* Social Links */}
              <div className="space - y-3">;
                <h5 className="text - sm font - medium text - green - 300">Follow Us</h5>;
                <div className="flex flex - wrap gap - 2">;
                  {social_links.map ((social, index) => (
                    <a;
                      key={index}
                      href={social.href}



                    </a>                  ))}

                </div>;
              </div>;


              {/* Certifications */}


              {/* Certifications */}
              <div className='space-y-3'>
                <h5 className='text-sm font-medium text-green-300 flex items-center space-x-2'>
                  <Award className='w-4 h-4' />


                  <span>Certifications</span>
                </h5>
                <div className='grid grid-cols-1 gap-2'>
                  {certifications.map((cert, index) => (
                  ))}
==============                      target='_blank';
                      rel='noopener noreferrer';
                      className='w - 10 h - 10 bg - gray - 800 / 50 hover:bg - purple - 500 / 20 rounded - lg flex items - center justify - center text - gray - 400 hover:text - purple - 400 transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 400 / 40';
                    >;
                      <social.icon className='w - 5 h - 5' />                    </a>                      target="_blank";
                      rel="noopener noreferrer";
                      className="w - 10 h - 10 bg - gray - 800 / 50 hover:bg - purple - 500 / 20 rounded - lg flex items - center justify - center text - gray - 400 hover:text - purple - 400 transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 400 / 40";
                    >;
                      <social.icon className="w - 5 h - 5" />))}
                </div>;
              </div>;
              {/* Certifications */}
              <div className='space - y-3'>;
                <h5 className='text - sm font - medium text - green - 300 flex items - center space - x-2'>;
                  <Award className='w - 4 h - 4' />;
                  <span > Certifications</span>;
                </h5>;
                <div className='grid grid - cols - 1 gap - 2'>;
                  {certifications.map ((cert, index) => (
                    <div;
                      key={index}
                      className='flex items - center space - x-2 text - xs text - gray - 400';
                    >;
                      <CheckCircle className='w - 3 h - 3 text - green - 400' />                      <span>{cert}</span>                  <span > Certifications</span>;
                </h5>;
                <div className="grid grid - cols - 1 gap - 2">;
                  {certifications.map ((cert, index) => (
                    <div key={index} className="flex items - center space - x-2 text - xs text - gray - 400">;
                      <CheckCircle className="w - 3 h - 3 text - green - 400" />;
                      <span>{cert}</span>;
                    </div>))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;

        {/* Bottom Bar */}
        <div className='border-t border-purple-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
=======
              <div className='flex items-center space-x-6 text-sm text-gray-400'>;
              <div className='flex items-center space-x-6 text-sm text-gray-400'>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  href='/privacy'
                  className='hover:text-purple-400 transition-colors'>;
                  Privacy Policy;
                </Link>;
                <Link
                  href='/terms'

        <div className="border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy, 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </div>
        {/* Bottom Bar */}
        <div className='border-t border-purple-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='flex items-center space-x-6 text-sm text-gray-400'>;
              <div className='flex items-center space-x-6 text-sm text-gray-400'>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link
                  href='/privacy'
                  className='hover:text-purple-400 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='hover:text-purple-400 transition-colors'
                >
                  Terms of Service
                </Link>
              </div>
              <div className='flex items-center space-x-4 text-sm text-gray-400'>              </div>
=======
              
=======
              

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion for innovation</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Heart className='w-4 h-4 text-red-400' />
                  <span>Made with passion for innovation</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Star className='w-4 h-4 text-yellow-400' />                  <span>5.0/5.0 Rating</span>                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>5.0/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
                  className='hover:text-purple-400 transition-colors'>;
                  Terms of Service;
                </Link>;
              </div>;
              <div className='flex items-center space-x-4 text-sm text-gray-400'>              </div>;
              <div className="flex items-center space-x-4 text-sm text-gray-400">;
                <div className="flex items-center space-x-2">;
                  <Heart className="w-4 h-4 text-red-400" />;
                  <span>Made with passion for innovation</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Heart className='w-4 h-4 text-red-400' />;
                  <span>Made with passion for innovation</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Star className='w-4 h-4 text-yellow-400' />                  <span>5 && 5.0/5 && 5.0 Rating</span>                <div className="flex items-center space-x-2">;
                  <Star className="w-4 h-4 text-yellow-400" />;
                  <span>5 && 5.0/5 && 5.0 Rating</span>;
        {/* Bottom Bar */}
        <div className='border - t border - purple - 500 / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
            <div className='flex flex - col md:flex - row items - center justify - between space - y-4 md:space - y-0'>;
              <div className='flex items - center space - x-6 text - sm text - gray - 400'>;
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>;
                <Link;
                  href='/privacy';
                  className='hover:text - purple - 400 transition - colors';
                >;
                  Privacy Policy;
                </Link>;
                <Link;
                  href='/terms';
                  className='hover:text - purple - 400 transition - colors';
                >;
                  Terms of Service;
                </Link>;
              </div>;
              <div className='flex items - center space - x-4 text - sm text - gray - 400'>              </div>;
              <div className="flex items - center space - x-4 text - sm text - gray - 400">;
                <div className="flex items - center space - x-2">;
                  <Heart className="w - 4 h - 4 text - red - 400" />;
                  <span > Made with passion for innovation</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Heart className='w - 4 h - 4 text - red - 400' />;
                  <span > Made with passion for innovation</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Star className='w - 4 h - 4 text - yellow - 400' />                  <span > 5.0 / 5.0 Rating</span>                <div className="flex items - center space - x-2">;
                  <Star className="w - 4 h - 4 text - yellow - 400" />;
                  <span > 5.0 / 5.0 Rating</span>;


}
  );
}
;
}
}
}
=======

  );

  );
}

=======
    </footer>);
}=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  );

  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
