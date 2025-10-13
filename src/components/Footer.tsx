'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const services = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Cloud Solutions', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'DevOps', url: '/devops' ;
  ]

  const solutions = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Robotics', url: '/robotics' ;
  ]

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' ;
  ]

  const support = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/documentation' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Request Demo', url: '/demo' },
    { name: 'Free Consultation', url: '/consultation' ;
  ]

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'contact@ziontechgroup.com',
    address: '123 Tech Street, Suite 100, San Francisco, CA 94105',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  ;
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/zion-tech-group', icon: Github ;
  ]

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */;
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
            </div>
            <p className="text-sm text-cyan-400 mb-4">AI & IT Solutions</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>)
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    {service.name;
                  </Link>
                </li>));
            </ul>
            <Link 
              to="/ai-services"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium mt-4 inline-block"
            >
              View All AI Services →
            </Link>
          </div>

          {/* Solutions */;
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    {service.name;
                  </Link>
                </li>));
            </ul>
            <Link 
              to="/it-services"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium mt-4 inline-block"
            >
              View All IT Services →
            </Link>
          </div>

          {/* Company & Support */;
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name;
                  </Link>
                </li>));
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
