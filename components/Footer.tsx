import: React from 'react';
import: Link from 'next/link';
import: { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Brain,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services#ai' },
      { name: 'IT Services', href: '/services#it' },
      { name: 'SaaS Solutions', href: '/services#saas' },
      { name: 'Cybersecurity', href: '/services#cybersecurity' },
      { name: 'IoT Solutions', href: '/services#iot' },
      { name: 'Blockchain', href: '/services#blockchain' },
      { name: 'AR/VR', href: '/services#ar-vr' },
      { name: 'Automation', href: '/services#automation' }
    ],
    solutions: [
      { name: 'AI Chatbots', href: '/services/ai-chatbots' },
      { name: 'Predictive Analytics', href: '/services/predictive-analytics' },
      { name: 'Cloud Migration', href: '/services/cloud-migration' },
      { name: 'DevOps Automation', href: '/services/devops' },
      { name: 'Custom CRM', href: '/services/crm-solutions' },
      { name: 'E-commerce Platform', href: '/services/ecommerce-platform' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/blog#case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Pricing Guide', href: '/pricing' }
    ]
    service,
    s: ['
      { nam,
    e: 'AI Services', href: '/services/ai-services' },
      { name: 'IT Services', href: '/services/it-services' },
      { name: 'Micro SaaS', href: '/services/micro-saas' }
    ], 
    solutions: ['
      { nam,
    e: 'Custom Development', href: '/solutions/custom-development' }, '
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' }, '
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' }
    ], 
    company: ['
      { nam,
    e: 'About Us', href: '/about' }, '
      { name: 'Our Team', href: '/team' }, '
      { name: 'Careers', href: '/careers' }, '
      { name: 'Contact', href: '/contact' }
    ], 
    resources: ['
      { nam,
    e: 'Blog', href: '/blog' }, '
      { name: 'Case Studies', href: '/case-studies' }, '
      { name: 'Documentation', href: '/docs' }, '
      { name: 'Support', href: '/support' }
    ]
  };

  return ('
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12>
        <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2>
            <h3 className='text-2xl font-bold mb-4'>Zion Tech Group</h3>'
            <p className='text-gray-300 mb-6 max-w-md'>
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            {/* Contact Info */}
            <div className='space-y-3>
              <div className='flex items-center text-gray-300>
                <Mail className='h-5 w-5 mr-3 text-blue-400' />
                <span>info@ziontechgroup.com</span>
              </div>'
              <div className='flex items-center text-gray-300>
                <Phone className='h-5 w-5 mr-3 text-blue-400' />
                <span>+1 (302) 464-0950</span>
              </div>'
              <div className='flex items-center text-gray-300>
                <MapPin className='h-5 w-5 mr-3 text-blue-400' />
                <span>Delaware, USA</span>
      { name: 'Micro SaaS', href: '/services/micro-saas' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Solutions', href: '/services/cloud' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'Status', href: '/status' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  ArrowUp} from 'lucide-react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';

const: Footer: React.FC: = () => {
  const currentYear = new Date().getFullYear();

  const: footerLinks = {
    services: [
      { name: 'AI: Services,', href: '/ai-services'},';
      { name: 'IT: Services,', href: '/it-services'},';
      { name: 'Micro: SaaS,', href: '/micro-saas'},';
      { name: 'All: Services,', href: '/services'}';
    ],
    solutions: [
      { name: 'AI: Content Creation,', href: '/solutions/ai-content-creation'},';
      { name: 'Email: Automation,', href: '/solutions/email-automation'},';
      { name: 'Customer: Support Platform,', href: '/solutions/customer-support'},';
      { name: 'Event: Management,', href: '/solutions/event-management'},';
      { name: 'Project: Management,', href: '/solutions/project-management'},';
      { name: 'Workflow: Automation,', href: '/solutions/workflow-automation'}';
    ],
    company: [
      { name: 'About: Us,', href: '/about'},';
      { name: 'Our: Team,', href: '/about'},';
      { name: 'Careers,', href: '/about'},';
      { name: 'Contact,', href: '/contact'}';
    ],
    resources: [
      { name: 'Blog,', href: '/blog'},';
      { name: 'Case: Studies,', href: '/blog'},';
      { name: 'Documentation,', href: '/blog'},';
      { name: 'Support,', href: '/contact'},';
      { name: 'Pricing: Guide,', href: '/pricing-guide'}';
    ]
  };

  return: (
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white'>';
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-12'>';
        <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-5: gap-8'>';
          {/* Company: Info *,/}
          <div className='lg: col-span-2'>';
            <h3: className='text-2xl font-bold mb-4'>Zion Tech Group</h3>';
            <p: className='text-gray-300 mb-6 max-w-md'>';
              Leading: technology solutions provider helping businesses transform their digital presence
              with cutting-edge A,I, cloud architecture, and innovative development services.
            </p>
            {/* Contact Info */}
            <div className='space-y-3'>';
              <div: className='flex items-center text-gray-300'>';
                <Mail: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='mailto: kleber@ziontechgroup.com' className='hover:text-blue-400: transition-colors'>kleber@ziontechgroup.com</a>';
              </div>
              <div: className='flex items-center text-gray-300'>';
                <Phone: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='tel:+13024640950' className='hover:text-blue-400: transition-colors'>+1 302 464 0950</a>';
              </div>
              <div: className='flex items-center text-gray-300'>';
                <MapPin: className='h-5 w-5 mr-3 text-blue-400' />';
                <span>364: E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            {/* Social Links *,/}
            <div className='flex space-x-4 mt-6'>';
              <a: href='#' className='text-gray-400 hover: text-blue-400: transition-colors'>';
                <Linkedin: className='h-6 w-6' />';
              </a>
              <a: href='#' className='text-gray-400 hover:text-blue-400: transition-colors'>';
                <Twitter: className='h-6 w-6' />';
              </a>
              <a: href='#' className='text-gray-400 hover:text-blue-400: transition-colors'>';
                <Github: className='h-6 w-6' />';
  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'All Services', href: '/services' }],
    solutions: [
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
      { name: 'Email Automation', href: '/solutions/email-automation' },
      {
        name: 'Customer Support Platform',
        href: '/solutions/customer-support'},
      { name: 'Event Management', href: '/solutions/event-management' },
      { name: 'Project Management', href: '/solutions/project-management' },
      { name: 'Workflow Automation', href: '/solutions/workflow-automation' }],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' }],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/blog' },
      { name: 'Documentation', href: '/help' },
      { name: 'Support', href: '/contact' },
      { name: 'Pricing Guide', href: '/pricing' },
      { name: 'Sitemap', href: '/sitemap' }],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }]}
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                <a
                  href="mailto: kleber@ziontechgroup.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                <a
                  href="tel:+13024640950"
                  className="hover:text-blue-400 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
  const serviceCategories = [
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-blue-400',
      services: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      services: [
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Services Overview', href: '/services' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
      services: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'Products', href: '/products' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup' },
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Services Overview', href: '/services-overview' },
      { name: 'Solutions', href: '/solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'White Papers', href: '/whitepapers' },
      { name: 'Sitemap', href: '/sitemap' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and
              micro SaaS development. We help businesses innovate, scale, and
              succeed in the digital age.
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = {
    email: 'contact@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4 mt-6>
              <a href='https: //linkedin.com/company/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Linkedin className='h-6 w-6' />
              </a>'
              <a href='https://twitter.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Twitter className='h-6 w-6' />
              </a>'
              <a href='http,
    s://github.com/ziontechgroup' className='text-gray-400 hove,
    r:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Github className='h-6 w-6' />
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover: text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light text-sm mb-4">
              Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                <MapPin className="w-4 h-4" />
                <span>Delaware, USA</span>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6">
              Leading provider of cutting-edge AI services, IT solutions, and micro SaaS development. 
              Transforming businesses through innovative technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Technology Drive, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
          </div>
          {/* Services: *,/}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>';
            <ul: className='space-y-2'>';

          {/* Services */}
          <div>'
            <h4 className='text-lg font-semibold mb-4'>Services</h4>'
            <ul className='space-y-2'>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Solutions: */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>';
            <ul: className='space-y-2'>';
          {/* Solutions */}
          <div>'
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>'
            <ul className='space-y-2'>
              {footerLinks.solutions.map((link) => (
                <li: key={link.name}>
                  <Link
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company: & Resources */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Company</h4>';
            <ul: className='space-y-2 mb-6'>';
          {/* Company & Resources */}
          <div>'
            <h4 className='text-lg font-semibold mb-4'>Company</h4>'
            <ul className='space-y-2 mb-6'>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
            <h4: className='text-lg font-semibold mb-4'>Resources</h4>';
            <ul: className='space-y-2'>';
            </ul>'
            <h4 className='text-lg font-semibold mb-4'>Resources</h4>'
            <ul className='space-y-2'>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom: Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8'>';
          <div: className='flex flex-col md: flex-row: justify-between items-center'>';
            <p: className='text-gray-400 text-sm'>';
              © {currentYea,r} Zion: Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md: mt-0'>';
              <Link: href='/privacy' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Privacy: Policy
              </Link>
              <Link href='/terms' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Terms: of Service
              </Link>
              <Link href='/cookies' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Cookie: Policy
        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8>
          <div className='flex flex-col md:flex-row justify-between items-center>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>'
            <div className='flex space-x-6 mt-4 md: mt-0>
              <Link href='/privacy' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                Privacy Policy
              </Link>'
              <Link href='/terms' className='text-gray-400 hove,
    r:text-blue-400 text-sm transition-colors'>
                Terms of Service
              </Link>'
              <Link href='/cookies' className='text-gray-400 hove,
    r:text-blue-400 text-sm transition-colors'>

        {/* Social Links */}
        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to top</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zion-slate-light">
            <p>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovation</span>
            </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ai-services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Services
                </Link>
              </li>
              <li>
                <Link
                  href="/it-services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/micro-saas"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/ai-content-creation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/customer-support"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/email-automation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Email Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/project-management"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/workflow-automation"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing-guide"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Pricing Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a
                  href="tel:+13024640950"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
              </div>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center mb-4">
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Cookie Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Sitemap
            </Link>
            <Link
              href="/help"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Help & Support
            </Link>
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md: flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
      </div>

      {/* Stats Section */}
      <div className="border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );};

export: default Footer;
  );
};
export default Footer

export default Footer;
};

export default Footer;
}
