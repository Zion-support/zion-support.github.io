<<<<<<< HEAD
<<<<<<< HEAD
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
import React from 'react';
import Link from 'next / link';
import React from 'react',
import Link from 'next/link';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react',
import Link from 'next/link';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,;
  ArrowRight,;
} from 'lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,;
  ArrowRight,;
} from 'lucide-react';

import {
  Mail
  Phone
  MapPin
  Globe
  Zap
  Bot
  Cloud
  Shield
  ArrowRight;
} from 'lucide-react';
export default function FuturisticFooter() {;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';
export default function FuturisticFooter() {

export default function FuturisticFooter() {;
=======
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const currentYear = new Date().getFullYear();import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';


export default function FuturisticFooter() {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const currentYear = new Date().getFullYear();
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
  const quickLinks = [
    { name: 'Services', href: '/services' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Pricing', href: '/pricing' }
    { name: 'About', href: '/about' }
    { name: 'Contact', href: '/contact' }
    { name: 'Blog', href: '/blog' }
  ];
  const serviceCategories = [
    {
      name: 'AI & Machine Learning'
      href: '/services?category=AI%20%26%20Machine%20Learning'
    }
    {
      name: 'Cloud & Infrastructure'
      href: '/services?category=Cloud%20%26%20Infrastructure'
    }
    { name: 'Cybersecurity', href: '/services?category=Cybersecurity' }
    {
      name: 'Analytics & Business Intelligence'
      href: '/services?category=Analytics%20%26%20Business%20Intelligence'
    }
    {
      name: 'Robotics & Automation'
      href: '/services?category=Robotics%20%26%20Automation'
    }
    {
      name: 'Blockchain & Web3'
      href: '/services?category=Blockchain%20%26%20Web3'
    }
  ];
  const socialLinks = [
    {
      name: 'LinkedIn'
      href: 'https://www.linkedin.com/company/zion-tech-group'
      icon: '💼'
    }
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: '🐦' }
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import Link from 'next/link';


  ];
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>;
      {/* Animated background elements */}

      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5' />;
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />;
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />;
      </div>;

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;

        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>;
          {/* Company Info */}
          <div className='lg:col-span-1'>;
            <div className='flex items-center space-x-2 mb-6'>;
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </span>;
            </div>;
            <p className='text-gray-400 mb-6 leading-relaxed'>;
              Leading provider of AI-powered micro SaaS solutions, helping;
              businesses automate, optimize, and scale their operations with;
              cutting-edge technology.;
            </p>;
            <div className='flex space-x-4'>;
              {socialLinks && socialLinks.map(social => (;
                <a
                  key={social && social.name}
                  href={social && social.href}
                  target='_blank'
                  rel='noopener noreferrer'


  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">;
      {/* Animated background elements */}

      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />;
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />;
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />;
      </div>;

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-2 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">;
                <Zap className="w-6 h-6 text-white" />;
              </div>;
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Zion Tech Group;
              </span>;
            </div>;
            <p className="text-gray-400 mb-6 leading-relaxed">;
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.;
            </p>;
            <div className="flex space-x-4">;
              {socialLinks && socialLinks.map((social) => (;
<<<<<<< HEAD
<<<<<<< HEAD
  ];
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5' />
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />
      </div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                Zion Tech Group
              </span>
            </div>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Leading provider of AI-powered micro SaaS solutions, helping
              businesses automate, optimize, and scale their operations with
              cutting-edge technology.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>;
          </div>;
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
    { name: 'Blog', href: '/blog' },
  ];
;
  const service_categories = [;
    {
      name: 'AI & Machine Learning',
      href: '/services?category = AI%20%26%20Machine%20Learning',
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category = Cloud%20%26%20Infrastructure',
    },
    { name: 'Cybersecurity', href: '/services?category = Cybersecurity' },
    {
      name: 'Analytics & Business Intelligence',
      href: '/services?category = Analytics%20%26%20Business%20Intelligence',
    },
    {
      name: 'Robotics & Automation',
      href: '/services?category = Robotics%20%26%20Automation',
    },
    {
      name: 'Blockchain & Web3',
      href: '/services?category = Blockchain%20%26%20Web3',
    },
  ];
;
  const social_links = [;
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com / company / zion - tech - group',
      icon: '💼',
    },
    { name: 'X', href: 'https://x.com / ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: '💻' },
  ];
;
  return (
    <footer className='relative bg - gradient - to - br from - gray - 900 via - black to - gray - 900 overflow - hidden'>;
      {/* Animated background elements */}
      <div className='absolute inset - 0'>;
        <div className='absolute inset - 0 bg - gradient - to - r from - blue - 500 / 5 to - purple - 500 / 5' />;
        <div className='absolute top - 0 left - 0 w - full h - px bg - gradient - to - r from - transparent via - blue - 500 / 50 to - transparent' />;
        <div className='absolute bottom - 0 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent' />;
      </div>;
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        {/* Main footer content */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8 mb - 12'>;
          {/* Company Info */}
          <div className='lg:col - span - 1'>;
            <div className='flex items - center space - x-2 mb - 6'>;
              <div className='w - 10 h - 10 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - xl flex items - center justify - center'>;
                <Zap className='w - 6 h - 6 text - white' />;
              </div>;
              <span className='text - xl font - bold bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text - transparent'>;
                Zion Tech Group;
              </span>;
            </div>;
            <p className='text - gray - 400 mb - 6 leading - relaxed'>;
              Leading provider of AI - powered micro SaaS solutions, helping;
              businesses automate, optimize, and scale their operations with;
              cutting - edge technology.;
            </p>;
            <div className='flex space - x-4'>;
              {social_links.map (social => (
                <a;
                  key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='w - 10 h - 10 bg - white / 10 hover:bg - white / 20 rounded - lg flex items - center justify - center text - gray - 400 hover:text - white transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 400 / 40';
                >;
                  <span className='text - lg'>{social.icon}</span>                </a>  const service_categories = [;
    { name: 'AI & Machine Learning', href: '/services?category = AI%20%26%20Machine%20Learning' },
    { name: 'Cloud & Infrastructure', href: '/services?category = Cloud%20%26%20Infrastructure' },
    { name: 'Cybersecurity', href: '/services?category = Cybersecurity' },
    { name: 'Analytics & Business Intelligence', href: '/services?category = Analytics%20%26%20Business%20Intelligence' },
    { name: 'Robotics & Automation', href: '/services?category = Robotics%20%26%20Automation' },
    { name: 'Blockchain & Web3', href: '/services?category = Blockchain%20%26%20Web3' }],
  const social_links = [;
    { name: 'LinkedIn', href: 'https://www.linkedin.com / company / zion - tech - group', icon: '💼' },
    { name: 'X', href: 'https://x.com / ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: '💻' }],
  return (
    <footer className="relative bg - gradient - to - br from - gray - 900 via - black to - gray - 900 overflow - hidden">;
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8 mb - 12">;
          {/* Company Info */}
=======


              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;
          </div>;


<<<<<<< HEAD



          {/* Quick Links */}


          {/* Services */}


                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className='text - lg font - semibold text - white mb - 6 flex items - center'>;
              <Cloud className='w - 5 h - 5 text - green - 400 mr - 2' />;
              Services;
            </h3>;
            <ul className='space - y-3'>;
              {service_categories.map (service => (
                <li key={service.name}>;
                  <Link;
                    href={service.href}
                    className='text - gray - 400 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block'                  >              Services;
            </h3>;
            <ul className="space - y-3">;
              {service_categories.map ((service) => (
                <li key={service.name}>;
                  <Link;
                    href={service.href}
                    className="text - gray - 400 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block";
                  >;
                    {service.name}
            </ul>;
          </div>;
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Quick Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Services */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Contact Info */}
          <div>;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4'>;
              <div className='flex items-start space-x-3'>;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Phone</p>;
                  <a
<<<<<<< HEAD
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </div>
            <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className=&quot;flex space-x-4&quot;>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
=======


              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
              Services
            </h3>
            <ul className='space-y-3'>
              {serviceCategories.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Quick Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Services */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Contact Info */}
          <div>;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4'>;
              <div className='flex items-start space-x-3'>;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Phone</p>;
                  <a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
              Contact Us
<<<<<<< HEAD
<<<<<<< HEAD
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-white font-medium'>Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'                  >              Contact Us
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-white font-medium'>Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'                  >                <div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className="text-white font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-white font-medium'>Address</p>
                  <p className='text-gray-400 text-sm'>{contactInfo.address}</p>                </div>                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    {contactInfo.address}
                  </p>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    {contactInfo.address}
                  </p>
                </div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'>              Contact Us;
            </h3>;
            <div className="space-y-4">;
              <div className="flex items-start space-x-3">;
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />;
                <div>;
                  <p className="text-white font-medium">Phone</p>;
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
              </div>;
              <div className='flex items-start space-x-3'>;
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Email</p>;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'>                <div>;
                  <p className="text-white font-medium">Email</p>;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
              </div>;
              <div className='flex items-start space-x-3'>;
                <MapPin className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Address</p>;
                  <p className='text-gray-400 text-sm'>{contactInfo && contactInfo.address}</p>                </div>                  <p className="text-white font-medium">Address</p>;
                  <p className="text-gray-400 text-sm">;
                    {contactInfo && contactInfo.address}
                  </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom section */}
        <div className='pt-8 border-t border-gray-800'>;
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>;
            <div className='text-gray-400 text-sm'>;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className='flex space-x-6 text-sm'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href='/privacy'
                className='text-gray-400 hover:text-white transition-colors duration-200'>;
                Privacy Policy;
              </Link>;
              <Link
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors duration-200'>;
                Terms of Service;
              </Link>;
              <Link
                href='/cookies'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Floating elements */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
      <div className='absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500' />
    </footer>
  );      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>
);
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>

                className='text-gray-400 hover:text-white transition-colors duration-200'>                Cookie Policy              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-6 text-sm">;
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Floating elements */}
      <div className='absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse' />;
      <div className='absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000' />;
      <div className='absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500' />;
    </footer>;
  );      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />;
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />;
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />;
    </footer>;
  );
}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Contact Info */}
          <div>;
            <h3 className='text - lg font - semibold text - white mb - 6 flex items - center'>;
              <Shield className='w - 5 h - 5 text - purple - 400 mr - 2' />;
              Contact Us;
            </h3>;
            <div className='space - y-4'>;
              <div className='flex items - start space - x-3'>;
                <Phone className='w - 5 h - 5 text - blue - 400 mt - 1 flex - shrink - 0' />;
                <div>;
                  <p className='text - white font - medium'>Phone</p>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='text - gray - 400 hover:text - blue - 400 transition - colors duration - 200'                  >              Contact Us;
            </h3>;
            <div className="space - y-4">;
              <div className="flex items - start space - x-3">;
                <Phone className="w - 5 h - 5 text - blue - 400 mt - 1 flex - shrink - 0" />;
                <div>;
                  <p className="text - white font - medium">Phone</p>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className="text - gray - 400 hover:text - blue - 400 transition - colors duration - 200";
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
              </div>;
              <div className='flex items - start space - x-3'>;
                <Mail className='w - 5 h - 5 text - green - 400 mt - 1 flex - shrink - 0' />;
                <div>;
                  <p className='text - white font - medium'>Email</p>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='text - gray - 400 hover:text - green - 400 transition - colors duration - 200'                  >                <div>;
                  <p className="text - white font - medium">Email</p>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className="text - gray - 400 hover:text - green - 400 transition - colors duration - 200";
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
              </div>;
              <div className='flex items - start space - x-3'>;
                <MapPin className='w - 5 h - 5 text - purple - 400 mt - 1 flex - shrink - 0' />;
                <div>;
                  <p className='text - white font - medium'>Address</p>;
                  <p className='text - gray - 400 text - sm'>{contact_info.address}</p>                </div>                  <p className="text - white font - medium">Address</p>;
                  <p className="text - gray - 400 text - sm">;
                    {contact_info.address}
                  </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom section */}
        <div className='pt - 8 border - t border - gray - 800'>;
          <div className='flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0'>;
            <div className='text - gray - 400 text - sm'>;
              © {current_year} Zion Tech Group. All rights reserved.;
            </div>;
            <div className='flex space - x-6 text - sm'>;
              <Link;
                href='/privacy';
                className='text - gray - 400 hover:text - white transition - colors duration - 200';
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href='/terms';
                className='text - gray - 400 hover:text - white transition - colors duration - 200';
              >;
                Terms of Service;
              </Link>;
              <Link;
                href='/cookies';
                className='text - gray - 400 hover:text - white transition - colors duration - 200';
              >                Cookie Policy              © {current_year} Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space - x-6 text - sm">;
              <Link href="/privacy" className="text - gray - 400 hover:text - white transition - colors duration - 200">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text - gray - 400 hover:text - white transition - colors duration - 200">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text - gray - 400 hover:text - white transition - colors duration - 200">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Floating elements */}
      <div className='absolute top - 20 right - 20 w - 2 h - 2 bg - blue - 400 rounded - full animate - pulse' />;
      <div className='absolute bottom - 32 left - 32 w - 3 h - 3 bg - purple - 400 rounded - full animate - pulse delay - 1000' />;
      <div className='absolute top - 1/2 left - 10 w - 1 h - 1 bg - green - 400 rounded - full animate - pulse delay - 500' />;
    </footer>);      <div className="absolute top - 20 right - 20 w - 2 h - 2 bg - blue - 400 rounded - full animate - pulse" />;
      <div className="absolute bottom - 32 left - 32 w - 3 h - 3 bg - purple - 400 rounded - full animate - pulse delay - 1000" />;
      <div className="absolute top - 1/2 left - 10 w - 1 h - 1 bg - green - 400 rounded - full animate - pulse delay - 500" />;
    </footer>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}



<<<<<<< HEAD
  );
}

}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
