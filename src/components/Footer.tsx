import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';


'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Machine Learning Platform', url: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' },
    { name: 'AI Research & Development', url: '/ai-research-development', description: 'Custom AI R&D' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'AI at the edge' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'System Administration', url: '/system-administration', description: 'System management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'IT Infrastructure Design', url: '/it-infrastructure-design', description: 'Custom infrastructure' },
    { name: 'IT Performance Monitoring', url: '/it-performance-monitoring', description: 'Real-time monitoring' },
    { name: 'IT Disaster Recovery', url: '/it-disaster-recovery', description: 'Disaster recovery' },
    { name: 'IT Automation', url: '/it-automation', description: 'IT process automation' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Robotics', url: '/robotics', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business modernization' },
    { name: 'Innovation Labs', url: '/innovation-labs', description: 'R&D and prototyping' },
    { name: 'Sustainability Tech', url: '/sustainability-tech', description: 'Green technology solutions' },
    { name: 'Future Technologies', url: '/future-technologies', description: 'Emerging tech solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Docs', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' },
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
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  const achievements = [
    { stat: '50+ Successful Projects' },
    { stat: '100+ Happy Clients' },
    { stat: '300% Average ROI' },
    { stat: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Main Footer Content */}
export default function Footer() {
  const currentYear = new Date().getFullYear();
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  {social.icon}
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
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
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
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
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Emerging Tech</h3>
            <ul className="space-y-3">
              {emergingTech.slice(0, 8).map((service, index) => (
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
                  to="/quantum-computing"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Technologies →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card">
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.phone}</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
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
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;