'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'AI-powered analytics', icon: '📈', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️', popular: false },
    { name: 'AI SEO Optimizer', url: '/ai-marketing', description: 'AI-driven SEO', icon: '🎯', popular: false }
  ];

  const aiServices = [
    { name: 'Machine Learning', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'Advanced NLP solutions' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/it-services', description: 'Cloud migration and setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Streamlined development workflows' },
    { name: 'Database Services', url: '/database', description: 'Database design and optimization' }
  ];

  const specializedSolutions = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white neon-text">Micro SAAS Solutions</h4>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300 flex items-center space-x-1"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white neon-text">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <Brain className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white neon-text">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <Cloud className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-white font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Call us anytime</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-pink-400" />
              <div>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Email us</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-4 neon-text">Quick Links</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Specialized Solutions */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-4 neon-text">Specialized Solutions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedSolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.url}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <div>
                  <div className="font-medium">{solution.name}</div>
                  <div className="text-xs text-gray-500">{solution.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;