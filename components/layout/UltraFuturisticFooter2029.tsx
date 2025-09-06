import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Atom,
  Building,
  Briefcase,
  Microscope,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Zap,
  Sparkles,
  Shield,
  Cpu,
<<<<<<< HEAD
  Database,;} from 'lucide-react';
=======
  Database,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, 
  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',};
=======
<<<<<<< HEAD
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
=======
  website: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    services: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2029',
      },
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
      },
      {
        name: 'Autonomous Business Operations',
        href: '/autonomous-business-operations-platform',
      },
      {
        name: 'AI-Powered IT Asset Management',
        href: '/ai-powered-it-asset-management',
      },
    ],
<<<<<<< HEAD
  },  {
=======
  },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' }
    ]
  };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: '🧠 AI & Technology',
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'Machine Learning', href: '/machine-learning' },
      { name: 'Natural Language Processing', href: '/nlp-services' },
<<<<<<< HEAD
      { name: 'Computer Vision', href: '/computer-vision' },
    ],
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Computer Vision', href: '/computer-vision' },
    ],
  },
=======
      { name: 'Computer Vision', href: '/computer-vision' }
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Computer Vision', href: '/computer-vision' }
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: '⚛️ Quantum & Emerging Tech',
    services: [
      { name: 'Quantum Computing', href: '/quantum-computing' },
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
      { name: 'IoT Platforms', href: '/iot-platforms' },
<<<<<<< HEAD
      { name: 'Space Technology', href: '/space-tech' },
    ],
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Space Technology', href: '/space-tech' },
    ],
  },
=======
      { name: 'Space Technology', href: '/space-tech' }
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Space Technology', href: '/space-tech' }
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: '🏙️ Enterprise Solutions',
    services: [
      { name: 'Enterprise IT', href: '/enterprise-it' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
<<<<<<< HEAD
      { name: 'DevOps Automation', href: '/devops-automation' },
    ],
  },];
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'DevOps Automation', href: '/devops-automation' },
    ],
  },
=======
      { name: 'DevOps Automation', href: '/devops-automation' }
    ]
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'DevOps Automation', href: '/devops-automation' }
    ]
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Rocket },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: MessageCircle },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  { name: 'Privacy', href: '/privacy', icon: Shield },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ziontechgroup',
    icon: Linkedin,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ziontechgroup',
    icon: Twitter,
    color: 'hover:text-sky-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Zion-Holdings',
    icon: Github,
    color: 'hover:text-gray-400',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@ziontechgroup',
    icon: Youtube,
    color: 'hover:text-red-500',
<<<<<<< HEAD
  },];
=======
  },
=======
  { name: 'Privacy', href: '/privacy', icon: Shield }
];

const socialLinks = [
=======
  { name: 'Privacy', href: '/privacy', icon: Shield }
];

const socialLinks = [
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Leadership Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
<<<<<<< HEAD
      { name: 'Partnerships', href: '/partnerships' },
    ],
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Partnerships', href: '/partnerships' },
    ],
  },
=======
      { name: 'Partnerships', href: '/partnerships' }
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Partnerships', href: '/partnerships' }
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: 'Solutions',
    links: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'Quantum Technology', href: '/quantum-technology' },
      { name: 'IT Infrastructure', href: '/it-infrastructure' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
<<<<<<< HEAD
      { name: 'Blockchain', href: '/blockchain-solutions' },
    ],
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Blockchain', href: '/blockchain-solutions' },
    ],
  },
=======
      { name: 'Blockchain', href: '/blockchain-solutions' }
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Blockchain', href: '/blockchain-solutions' }
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
<<<<<<< HEAD
      { name: 'Support Center', href: '/support' },
    ],
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Support Center', href: '/support' },
    ],
  },
=======
      { name: 'Support Center', href: '/support' }
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Support Center', href: '/support' }
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' },
      { name: 'Accessibility', href: '/accessibility' },
<<<<<<< HEAD
      { name: 'Compliance', href: '/compliance' },
    ],
  },];

const UltraFuturisticFooter2029 = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Compliance', href: '/compliance' },
    ],
  },
=======
      { name: 'Compliance', href: '/compliance' }
    ]
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      { name: 'Compliance', href: '/compliance' }
    ]
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

const UltraFuturisticFooter2029 = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50'>
=======
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center'>
                <Rocket className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>
                  Zion Tech Group
                </h3>
                <p className='text-sm text-gray-400'>Innovating the Future</p>
              </div>
            </div>

            <p className='text-gray-400 mb-6 leading-relaxed'>
              Leading the revolution in AI, quantum computing, and autonomous
              technology solutions. Transforming businesses with cutting-edge
              innovation.
            </p>

            {/* Contact Information */}
            <div className='space-y-3 mb-6'>
              <div className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors'>
                <Phone className='w-4 h-4' />
                <a href={`tel:${contactInfo.mobile}`} className='text-sm'>
                  {contactInfo.mobile}
                </a>
              </div>
              <div className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors'>
                <Mail className='w-4 h-4' />
                <a href={`mailto:${contactInfo.email}`} className='text-sm'>
                  {contactInfo.email}
                </a>
              </div>
<<<<<<< HEAD
              <div className='flex items-center space-x-3 text-gray-400'>
                <MapPin className='w-4 h-4' />
                <span className='text-sm'>{contactInfo.address}</span>              </div>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
=======
<<<<<<< HEAD
              <div className='flex items-center space-x-3 text-gray-400'>
                <MapPin className='w-4 h-4' />
                <span className='text-sm'>{contactInfo.address}</span>
=======
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Innovating the Future</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the revolution in AI, quantum computing, and autonomous technology solutions. 
              Transforming businesses with cutting-edge innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.address}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.address}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </div>

            {/* Social Links */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
=======
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50`}
                >
<<<<<<< HEAD
                  <social.icon className='w-5 h-5' />                </a>
=======
<<<<<<< HEAD
                  <social.icon className='w-5 h-5' />
=======
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50`}
                >
                  <social.icon className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <social.icon className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </div>
          </div>

          {/* Service Categories */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Our Services
            </h4>
            <div className='space-y-4'>
<<<<<<< HEAD
=======
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {category.title}
                  </h5>
                  <ul className='space-y-2'>
                    {category.services.map(service => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group'
                        >
<<<<<<< HEAD
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />                          <span>{service.name}</span>
=======
<<<<<<< HEAD
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{category.title}</h5>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          <span>{service.name}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Quick Links
            </h4>
            <div className='grid grid-cols-2 gap-2'>
              {quickLinks.map(link => (
<<<<<<< HEAD
=======
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <Link
                  key={link.name}
                  href={link.href}
                  className='flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50'
                >
<<<<<<< HEAD
                  <link.icon className='w-4 h-4' />                  <span>{link.name}</span>
=======
<<<<<<< HEAD
                  <link.icon className='w-4 h-4' />
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <link.icon className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <link.icon className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>{link.name}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>
            <div className='space-y-4'>
              {footerSections.map(section => (
<<<<<<< HEAD
=======
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="space-y-4">
              {footerSections.map((section) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div key={section.title}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {section.title}
                  </h5>
                  <ul className='space-y-2'>
                    {section.links.map(link => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
<<<<<<< HEAD
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200'                        >
=======
<<<<<<< HEAD
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200'
=======
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="space-y-4">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section.title}</h5>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='border-t border-slate-700/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>
<<<<<<< HEAD
=======
=======
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              © 2025 Zion Tech Group. All rights reserved.
            </div>

            <div className='flex items-center space-x-6 text-sm text-gray-400'>
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='hover:text-white transition-colors'
              >
                Terms of Service
              </Link>
<<<<<<< HEAD
              <Link
                href='/cookies'
                className='hover:text-white transition-colors'
              >                Cookie Policy
=======
<<<<<<< HEAD
              <Link
                href='/cookies'
                className='hover:text-white transition-colors'
              >
=======
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Link href="/cookies" className="hover:text-white transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Cookie Policy
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>
<<<<<<< HEAD
=======
=======
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Stay Updated with Innovation
            </h3>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Get the latest insights on AI, quantum computing, and autonomous
              technology. Join our newsletter for exclusive updates and industry
              insights.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
<<<<<<< HEAD
              <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>                Subscribe
=======
<<<<<<< HEAD
              <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>
=======
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Innovation
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and autonomous technology. 
              Join our newsletter for exclusive updates and industry insights.
            </p>
            
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Subscribe
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  );
};

export default UltraFuturisticFooter2029;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default UltraFuturisticFooter2029;
=======
  )
};

export default UltraFuturisticFooter2029;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default UltraFuturisticFooter2029;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
