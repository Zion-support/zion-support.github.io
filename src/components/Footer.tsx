import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';


'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'Machine Learning', description: 'Custom ML models and analytics', url: '/ai-services' },
    { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', url: '/ai-services' },
    { name: 'Computer Vision', description: 'Image and video analysis solutions', url: '/ai-services' },
    { name: 'AI Automation', description: 'Intelligent process automation', url: '/ai-services' },
    { name: 'AI Healthcare', description: 'Medical AI for diagnosis and treatment', url: '/ai-services' },
    { name: 'AI Fintech', description: 'Fintech AI for fraud detection and trading', url: '/ai-services' },
    { name: 'AI Cybersecurity', description: 'AI security solutions and threat detection', url: '/ai-services' },
    { name: 'AI Content Generation', description: 'AI-powered content creation', url: '/ai-services' }
  ];

  const itServices = [
    { name: 'Cloud Services', description: 'Cloud migration, setup, and optimization', url: '/it-services' },
    { name: 'Cybersecurity', description: 'Advanced security solutions', url: '/it-services' },
    { name: 'DevOps', description: 'Streamlined development workflows', url: '/it-services' },
    { name: 'Database Management', description: 'Database design and optimization', url: '/it-services' },
    { name: 'Infrastructure', description: 'Enterprise-grade infrastructure', url: '/it-services' },
    { name: 'Network Solutions', description: 'Network design and implementation', url: '/it-services' },
    { name: 'IT Consulting', description: 'Strategic IT planning', url: '/it-services' },
    { name: 'IT Support', description: '24/7 IT support and maintenance', url: '/it-services' }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', description: 'Intelligent project planning', url: '/micro-saas' },
    { name: 'AI Social Media Manager', description: 'Automated social media management', url: '/micro-saas' },
    { name: 'AI Business Intelligence', description: 'AI-powered business intelligence', url: '/micro-saas' },
    { name: 'AI Email Marketing', description: 'Intelligent email campaigns', url: '/micro-saas' },
    { name: 'AI Customer Support Bot', description: '24/7 AI customer support', url: '/micro-saas' },
    { name: 'AI Code Generation', description: 'Automated code analysis', url: '/micro-saas' },
    { name: 'AI Invoice Generator', description: 'Automated invoice creation', url: '/micro-saas' },
    { name: 'AI Lead Generation', description: 'Intelligent lead qualification', url: '/micro-saas' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', description: 'Quantum solutions', url: '/quantum-computing' },
    { name: 'Autonomous Systems', description: 'Intelligent robotics', url: '/autonomous-systems' },
    { name: 'IoT Solutions', description: 'Connected devices', url: '/iot-solutions' },
    { name: 'Blockchain', description: 'Decentralized solutions', url: '/blockchain' },
    { name: 'Big Data Analytics', description: 'Data insights', url: '/big-data' },
    { name: 'Edge Computing', description: 'Self-managing systems', url: '/edge-computing' },
    { name: 'AR/VR Solutions', description: 'Immersive experiences', url: '/ar-vr-solutions' },
    { name: 'Smart Cities', description: 'Urban technology solutions', url: '/smart-cities' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Requirements', url: '/requirements' },
    { name: 'Troubleshooting', url: '/troubleshooting' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
                  <p className="text-xs text-cyan-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h3>
              <ul className="space-y-3">
                {aiServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/ai-services" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All AI Services →
                  </Link>
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Github, ArrowRight, Shield, Award, Users, Zap } from 'lucide-react';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      {/* Main Footer Content */}
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI & Machine Learning', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'Data Analytics', href: '#services' },
      { name: 'Cybersecurity', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl cyber-text neon-text">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI and IT solutions that transform businesses 
              and drive digital innovation. We build the future, today.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/ai-marketing" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  AI Marketing
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/ai-healthcare" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  AI Healthcare
                </Link>
              </li>
              <li>
                <Link to="/ai-fintech" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  AI Fintech
                </Link>
              </li>
              <li>
                <Link to="/quantum-computing" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Quantum Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">IT Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-infrastructure" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cloud-services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/devops" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Micro SAAS Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-cyan-400" />
                <div className="text-gray-300 text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>24/7 Emergency Support</div>
                </div>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">IT Services</h3>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/it-services" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All IT Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SAAS Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/micro-saas" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All Micro SAAS →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Emerging Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Emerging Tech</h3>
              <ul className="space-y-3">
                {emergingTech.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-pink-400">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-orange-400">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-cyan-400/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 bg-slate-800/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="cyber-card-advanced p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI trends, technology updates, and industry best practices 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              />
              <button className="cyber-button px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest AI and technology insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
      </div>
    </footer>
  );
});

export default Footer;