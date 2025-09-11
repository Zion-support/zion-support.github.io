import React from 'react',
import React from 'react';
import Link from 'next/link';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';


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
  Cpu,;
  Database,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, ;


  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
=======
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, 
  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
} from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
const serviceCategories = [
  {
    title: 'AI & Machine Learning'
    icon: Brain
    services: [

      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' }
    ]
  };
  {
    title: '🧠 AI & Technology',
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'Machine Learning', href: '/machine-learning' },
      { name: 'Natural Language Processing', href: '/nlp-services' },
      { name: 'Computer Vision', href: '/computer-vision' }
    ]
  };

  {
    title: '⚛️ Quantum & Emerging Tech'
    services: [

      { name: 'Quantum Computing', href: '/quantum-computing' },
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
      { name: 'IoT Platforms', href: '/iot-platforms' },
      { name: 'Space Technology', href: '/space-tech' }
    ]
  };

  {
    title: '🏙️ Enterprise Solutions'
    services: [


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
  ArrowRight,;
  Star,;
  Rocket,;
  Brain,;
  Atom,;
  Building,;
  Briefcase,;
  Microscope,;
  Twitter,;
  Facebook,;
  Linkedin,;
  Instagram,;
  Youtube,;
  Github,;
  Zap,;
  Sparkles,;
  Shield,;
  Cpu,;
  Database,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Globe, ArrowRight, Star, ;
  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database;
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};
const serviceCategories = [;
  {;
    title: 'AI & Machine Learning',;
    icon: Brain,;
    services: [;
      {;
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-2029',;
      },;
      {;
        name: 'Quantum Neural Networks',;
        href: '/quantum-neural-network-platform',;
      },;
      {;
        name: 'Autonomous Business Operations',;
        href: '/autonomous-business-operations-platform',;
      },;
      {;
        name: 'AI-Powered IT Asset Management',;
        href: '/ai-powered-it-asset-management',;
      },;
    ],;
  },  {      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },;
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },;
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' },;
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' }
    ];
  };
    title: '🧠 AI & Technology',;
    services: [;
      { name: 'AI Services', href: '/ai-services' },;
      { name: 'Machine Learning', href: '/machine-learning' },;
      { name: 'Natural Language Processing', href: '/nlp-services' },;
      { name: 'Computer Vision', href: '/computer-vision' },;
    ],;
  },  {      { name: 'Computer Vision', href: '/computer-vision' }
    ];
  };
  {;
    title: '⚛️ Quantum & Emerging Tech',;
    services: [;
      { name: 'Quantum Computing', href: '/quantum-computing' },;
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' },;
      { name: 'IoT Platforms', href: '/iot-platforms' },;
      { name: 'Space Technology', href: '/space-tech' },;
    ],;
  },  {      { name: 'Space Technology', href: '/space-tech' }
    ];
  };
  {;
    title: '🏙️ Enterprise Solutions',;
    services: [;
      { name: 'Enterprise IT', href: '/enterprise-it' },;
      { name: 'Cloud Solutions', href: '/cloud-solutions' },;
      { name: 'Cybersecurity', href: '/cybersecurity' },;
      { name: 'DevOps Automation', href: '/devops-automation' },;
    ],;

  },];      { name: 'DevOps Automation', href: '/devops-automation' }
    ];
  }
];

      { name: 'Enterprise IT', href: '/enterprise-it' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'DevOps Automation', href: '/devops-automation' }
    ]
=======
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
];


              ))}

            </div>;
          </div>;


          {/* Service Categories */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Our Services
            </h4>
            <div className='space-y-4'>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {category.title}
                  </h5>
                  <ul className='space-y-2'>
                    {category.services.map(service => (
                      <li key={service.name}>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <Link
                          href={service && service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group'>;
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />                          <span>{service && service.name}</span>              {serviceCategories && serviceCategories.map((category, index) => (;
                <div key={index}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{category && category.title}</h5>;
                  <ul className="space-y-2">;
                    {category && category.services.map((service) => (;
                      <li key={service && service.name}>;
                        <Link
                          href={service && service.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">;
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />;
                          <span>{service && service.name}</span>;
                        </Link>;
                      </li>;

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
                          <span>{service.name}</span>
                        </Link>
                      </li>

                    ))}
                  </ul>;
                </div>;
              ))}
            </div>
          </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            </div>;
          </div>;


          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Quick Links
            </h4>
            <div className='grid grid-cols-2 gap-2'>
              {quickLinks.map(link => (

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

                <Link
                  key={link.name}
                  href={link.href}
                  className='flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50'
                >
                  <link.icon className='w-4 h-4' />                  <span>{link.name}</span>                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  <link.icon className='w-4 h-4' />                  <span>{link.name}</span>

                  <span>{link.name}</span>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              ))}

            </div>;
          </div>;


          {/* Footer Sections */}
          <div className='lg:col-span-1'>;
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>;
            <div className='space-y-4'>;
              {footerSections && footerSections.map(section => (;
                <div key={section && section.title}>;
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>;
                    {section && section.title}
                  </h5>;
                  <ul className='space-y-2'>;
                    {section && section.links.map(link => (;
                      <li key={link && link.name}>;
=======
            </div>
          </div>

          {/* Footer Sections */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>
            <div className='space-y-4'>
              {footerSections.map(section => (

                <div key={section.title}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {section.title}
                  </h5>
                  <ul className='space-y-2'>
                    {section.links.map(link => (
                      <li key={link.name}>
                        <Link
                          href={link && link.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200'>                <div key={section && section.title}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section && section.title}</h5>;
                  <ul className="space-y-2">;
                    {section && section.links.map((link) => (;
                      <li key={link && link.name}>;
                        <Link
                          href={link && link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200">;
                          {link && link.name}
                        </Link>;
                      </li>;

=======

          {/* Footer Sections */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="space-y-4">
              {footerSections.map((section) => (
=======




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          {/* Footer Sections */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>
            <div className='space-y-4'>
              {footerSections.map(section => (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <div key={section.title}>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section.title}</h5>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
;
const UltraFuturisticFooter2029 = () =>: any {
  return (
    <footer className='bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 border - t border - slate - 700 / 50'>;
      {/* Main Footer Content */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 12'>;
          {/* Company Info */}
          <div className='lg:col - span - 1'>;
            <div className='flex items - center space - x-3 mb - 6'>;
              <div className='w - 10 h - 10 bg - gradient - to - r from - purple - 500 to - blue - 500 rounded - xl flex items - center justify - center'>;
                <Rocket className='w - 6 h - 6 text - white' />;
              </div>;
              <div>;
                <h3 className='text - xl font - bold text - white'>;
                  Zion Tech Group;
                </h3>;
                <p className='text - sm text - gray - 400'>Innovating the Future</p>;
              </div>;
            </div>;
            <p className='text - gray - 400 mb - 6 leading - relaxed'>;
              Leading the revolution in AI, quantum computing, and autonomous;
              technology solutions. Transforming businesses with cutting - edge;
              innovation.;
            </p>;
            {/* Contact Information */}
            <div className='space - y-3 mb - 6'>;
              <div className='flex items - center space - x-3 text - gray - 400 hover:text - white transition - colors'>;
                <Phone className='w - 4 h - 4' />;
                <a href={`tel:${contact_info.mobile}`} className='text - sm'>;
                  {contact_info.mobile}
                </a>;
              </div>;
              <div className='flex items - center space - x-3 text - gray - 400 hover:text - white transition - colors'>;
                <Mail className='w - 4 h - 4' />;
                <a href={`mailto:${contact_info.email}`} className='text - sm'>;
                  {contact_info.email}
                </a>;
              </div>;
              <div className='flex items - center space - x-3 text - gray - 400'>;
                <MapPin className='w - 4 h - 4' />;
                <span className='text - sm'>{contact_info.address}</span>              </div>            </div>;
            {/* Social Links */}
            <div className='flex space - x-4'>;
              {social_links.map (social => (            {/* Contact Information */}
            <div className="space - y-3 mb - 6">;
              <div className="flex items - center space - x-3 text - gray - 400 hover:text - white transition - colors">;
                <Phone className="w - 4 h - 4" />;
                <a href={`tel:${contact_info.mobile}`} className="text - sm">;
                  {contact_info.mobile}
                </a>;
              </div>;
              <div className="flex items - center space - x-3 text - gray - 400 hover:text - white transition - colors">;
                <Mail className="w - 4 h - 4" />;
                <a href={`mailto:${contact_info.email}`} className="text - sm">;
                  {contact_info.email}
                </a>;
              </div>;
              <div className="flex items - center space - x-3 text - gray - 400">;
                <MapPin className="w - 4 h - 4" />;
                <span className="text - sm">{contact_info.address}</span>;
              </div>;
            </div>;
            {/* Social Links */}
            <div className='flex space - x-4'>;
              {social_links.map (social => (
                <a;
                  key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className={`p - 2 bg - slate - 800 / 50 rounded - lg text - gray - 400 ${social.color} transition - all duration - 200 hover:bg - slate - 700 / 50`}
                >;
                  <social.icon className='w - 5 h - 5' />                </a>                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className={`p - 2 bg - slate - 800 / 50 rounded - lg text - gray - 400 ${social.color} transition - all duration - 200 hover:bg - slate - 700 / 50`}
                >;
                  <social.icon className="w - 5 h - 5" />;
                </a>))}
            </div>;
          </div>;
          {/* Service Categories */}
          <div className='lg:col - span - 1'>;
            <h4 className='text - lg font - semibold text - white mb - 6'>;
              Our Services;
            </h4>;
            <div className='space - y-4'>;
              {service_categories.map ((category, index) => (
                <div key={index}>;
                  <h5 className='text - sm font - medium text - gray - 300 mb - 3'>;
                    {category.title}
                  </h5>;
                  <ul className='space - y-2'>;
                    {category.services.map (service => (
                      <li key={service.name}>;
                        <Link;
                          href={service.href}
                          className='text - sm text - gray - 400 hover:text - white transition - colors duration - 200 flex items - center space - x-2 group';
                        >;
                          <ArrowRight className='w - 3 h - 3 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 200' />                          <span>{service.name}</span>              {service_categories.map ((category, index) => (
                <div key={index}>;
                  <h5 className="text - sm font - medium text - gray - 300 mb - 3">{category.title}</h5>;
                  <ul className="space - y-2">;
                    {category.services.map ((service) => (
                      <li key={service.name}>;
                        <Link;
                          href={service.href}
                          className="text - sm text - gray - 400 hover:text - white transition - colors duration - 200 flex items - center space - x-2 group";
                        >;
                          <ArrowRight className="w - 3 h - 3 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 200" />;
                          <span>{service.name}</span>;
                        </Link>;
                      </li>))}
                  </ul>;
                </div>))}
            </div>;
          </div>;
          {/* Quick Links */}
          <div className='lg:col - span - 1'>;
            <h4 className='text - lg font - semibold text - white mb - 6'>;
              Quick Links;
            </h4>;
            <div className='grid grid - cols - 2 gap - 2'>;
              {quick_links.map (link => (
                <Link;
                  key={link.name}
                  href={link.href}
                  className='flex items - center space - x-2 text - sm text - gray - 400 hover:text - white transition - colors duration - 200 p - 2 rounded - lg hover:bg - slate - 800 / 50';
                >;
                  <link.icon className='w - 4 h - 4' />                  <span>{link.name}</span>                <Link;
                  key={link.name}
                  href={link.href}
                  className="flex items - center space - x-2 text - sm text - gray - 400 hover:text - white transition - colors duration - 200 p - 2 rounded - lg hover:bg - slate - 800 / 50";
                >;
                  <link.icon className="w - 4 h - 4" />;
                  <span>{link.name}</span>;
                </Link>))}
            </div>;
          </div>;
          {/* Footer Sections */}
          <div className='lg:col - span - 1'>;
            <h4 className='text - lg font - semibold text - white mb - 6'>Company</h4>;
            <div className='space - y-4'>;
              {footer_sections.map (section => (
                <div key={section.title}>;
                  <h5 className='text - sm font - medium text - gray - 300 mb - 3'>;
                    {section.title}
                  </h5>;
                  <ul className='space - y-2'>;
                    {section.links.map (link => (
                      <li key={link.name}>;
                        <Link;
                          href={link.href}
                          className='text - sm text - gray - 400 hover:text - white transition - colors duration - 200'                        >                <div key={section.title}>;
                  <h5 className="text - sm font - medium text - gray - 300 mb - 3">{section.title}</h5>;
                  <ul className="space - y-2">;
                    {section.links.map ((link) => (
                      <li key={link.name}>;
                        <Link;
                          href={link.href}
                          className="text - sm text - gray - 400 hover:text - white transition - colors duration - 200";
                        >;
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





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Bottom Footer */}
      <div className='border-t border-slate-700/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              © 2025 Zion Tech Group. All rights reserved.
            </div>
            <div className='flex items-center space-x-6 text-sm text-gray-400'>
=======
=======
                        </Link>;
                      </li>))}
                  </ul>;
                </div>))}
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className='border - t border - slate - 700 / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8'>;
          <div className='flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0'>;
            <div className='text - sm text - gray - 400'>;
              © 2025 Zion Tech Group. All rights reserved.;
            </div>;
            <div className='flex items - center space - x-6 text - sm text - gray - 400'>;
              <Link;
                href='/privacy';
                className='hover:text - white transition - colors';
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href='/terms';
                className='hover:text - white transition - colors';
              >;
                Terms of Service;
              </Link>;
              <Link;
                href='/cookies';
                className='hover:text - white transition - colors';
              >                Cookie Policy              © 2025 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex items - center space - x-6 text - sm text - gray - 400">;
              <Link href="/privacy" className="hover:text - white transition - colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="hover:text - white transition - colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="hover:text - white transition - colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;

      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.

            </div>
=======
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
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
      <div className='border-t border-slate-700/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>

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
              <Link
                href='/cookies'
                className='hover:text-white transition-colors'
              >                Cookie Policy              © 2025 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Signup */}

                className='hover:text-white transition-colors'>                Cookie Policy              © 2025 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <Link href="/privacy" className="hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Newsletter Signup */}
      <div className='bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50'>;
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>;
          <div className='text-center'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Stay Updated with Innovation;
            </h3>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>;
=======
      {/* Newsletter Signup */}
      <div className='bg - gradient - to - r from - purple - 600 / 10 to - blue - 600 / 10 border - t border - slate - 700 / 50'>;
        <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
          <div className='text - center'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Stay Updated with Innovation;
            </h3>;
            <p className='text - gray - 400 mb - 8 max - w-2xl mx - auto'>;

              Get the latest insights on AI, quantum computing, and autonomous;
              technology. Join our newsletter for exclusive updates and industry;
              insights.;
            </p>;

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
=======
              />;
              <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>                Subscribe              Stay Updated with Innovation;
            </h3>;
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">;
              Get the latest insights on AI, quantum computing, and autonomous technology. ;
              Join our newsletter for exclusive updates and industry insights.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;


              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"


                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;


};
export default UltraFuturisticFooter2029;  );
};
export default UltraFuturisticFooter2029;


=======
    </footer>);
}
;
export default UltraFuturisticFooter2029);
}
;
export default UltraFuturisticFooter2029;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
}
};

export default UltraFuturisticFooter2029;  )
}
export default UltraFuturisticFooter2029;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
