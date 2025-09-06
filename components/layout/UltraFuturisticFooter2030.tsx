import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
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
  CheckCircle,;} from 'lucide-react';import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle

} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',};

};

const serviceCategories = [
  {
    title: '🚀 AI & Consciousness',
    services: [
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-platform',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai-emotion-intelligence-platform',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/ai-creativity-orchestrator',
      },
      {
        name: 'AI Autonomous Business Manager',
        href: '/ai-autonomous-business-manager',
      },
    ],
  },

  {
    title: '⚛️ Quantum & Emerging Tech',
    services: [
      {
        name: 'Quantum Internet Security',
        href: '/quantum-internet-security-gateway',
      },
      {
        name: 'Quantum Learning Accelerator',
        href: '/quantum-learning-accelerator',
      },
      {
        name: 'Quantum Financial Trading',
        href: '/quantum-financial-trading-platform',
      },
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum-cloud-infrastructure',
      },
    ],
  },
  {
    title: '🧬 Biotech & DNA Computing',
    services: [
      {
        name: 'DNA Computing Platform',
        href: '/biotech-dna-computing-platform',
      },
      {
        name: 'Personalized Nutrition',
        href: '/biotech-personalized-nutrition',
      },
      {
        name: 'Predictive Health Analytics',
        href: '/ai-predictive-health-analytics',
      },
      { name: 'Research Automation', href: '/advanced-research-automation' },
    ],
  },  {
    title: '🏙️ Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },      { name: 'DNA Computing Platform', href: '/biotech-dna-computing-platform' },
      { name: 'Personalized Nutrition', href: '/biotech-personalized-nutrition' },
      { name: 'Predictive Health Analytics', href: '/ai-predictive-health-analytics' },
      { name: 'Research Automation', href: '/advanced-research-automation' }
    ]
  };

  {
    title: '🏙️ Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },

];

const companyInfo = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' },

];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ziontechgroup',
    icon: Linkedin,
  },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  {
    name: 'Facebook',
    href: 'https://facebook.com/ziontechgroup',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ziontechgroup',
    icon: Instagram,
  },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',];

export default function UltraFuturisticFooter2030() {
  return (
    <footer className='bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden'>

];

export default function UltraFuturisticFooter2030() {
  return (

                    {contactInfo.website.replace('https://', '')}

                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className='space-y-6'>
              <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>
                <Rocket className='w-5 h-5 text-purple-400' />

                <span>Our Services</span>
              </h4>
              <div className='grid grid-cols-1 gap-4'>
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className='space-y-2'>
                    <h5 className='text-sm font-medium text-purple-300'>
                      {category.title}
                    </h5>
                    <div className='space-y-1'>                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          className='block text-xs text-gray-400 hover:text-purple-300 transition-colors'                        >

                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}

                        >

                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                    <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />                    <span>{link.name}</span>

                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}

                    <span>{link.name}</span>

                  </Link>
                ))}
              </div>

              <div className='space-y-2'>
                <h5 className='text-sm font-medium text-cyan-300'>Company</h5>                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='block text-xs text-gray-400 hover:text-cyan-300 transition-colors'                  >

                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}

                  >

                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Certifications */}
            <div className='space-y-6'>
              <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>
                <Users className='w-5 h-5 text-green-400' />

                <span>Connect & Trust</span>
              </h4>

              {/* Social Links */}
              <div className='space-y-3'>
                <h5 className='text-sm font-medium text-green-300'>
                  Follow Us
                </h5>
                <div className='flex flex-wrap gap-2'>                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}

                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}

                    </a>

                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className='space-y-3'>
                <h5 className='text-sm font-medium text-green-300 flex items-center space-x-2'>
                  <Award className='w-4 h-4' />

                  <span>Certifications</span>
                </h5>
                <div className='grid grid-cols-1 gap-2'>
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-2 text-xs text-gray-400'
                    >
                      <CheckCircle className='w-3 h-3 text-green-400' />                      <span>{cert}</span>

                      <span>{cert}</span>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-purple-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
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

              <div className='flex items-center space-x-4 text-sm text-gray-400'>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion for innovation</span>
                </div>

                <div className='flex items-center space-x-2'>
                  <Heart className='w-4 h-4 text-red-400' />
                  <span>Made with passion for innovation</span>
                </div>

                  <span>5.0/5.0 Rating</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}