'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Mic,
  Video,
  DollarSign,
  Instagram as InstaIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Linkedin as LinkedinIcon,
  Youtube as YoutubeIcon
} from 'lucide-react';

const EnhancedFooter: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Intelligent voice solutions', price: '$199/mo' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', price: '$99/mo' },
    { name: 'AI Financial Planner', url: '/ai-financial-planner', description: 'Smart financial planning', price: '$49/mo' },
    { name: 'AI Code Generator', url: '/ai-code-generator', description: 'Generate code 10x faster', price: '$79/mo' },
    { name: 'AI Video Creator', url: '/ai-video-creator', description: 'Create videos with AI', price: '$99/mo' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'AI content creation', price: '$29/mo' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing', price: '$199/mo' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions', price: '$1,999/mo' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Cloud & Infrastructure', price: 'Custom' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development Operations', price: 'Custom' },
    { name: 'Database Services', url: '/database', description: 'Data Management', price: 'Custom' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security Solutions', price: 'Custom' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud Solutions', price: 'Custom' },
    { name: 'Networking', url: '/networking', description: 'Network Solutions', price: 'Custom' }
  ];

  const microSaasServices = [
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Voice solutions', price: '$199/mo' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation', price: '$99/mo' },
    { name: 'AI Financial Planner', url: '/ai-financial-planner', description: 'Financial planning', price: '$49/mo' },
    { name: 'AI Code Generator', url: '/ai-code-generator', description: 'Code generation', price: '$79/mo' },
    { name: 'AI Video Creator', url: '/ai-video-creator', description: 'Video creation', price: '$99/mo' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation', price: '$29/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: FacebookIcon },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: TwitterIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: InstaIcon },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: YoutubeIcon },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  const achievements = [
    { icon: Award, text: '500+ Successful Projects' },
    { icon: Users, text: '1,000+ Happy Clients' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <achievement.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors duration-300 group"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* AI Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">{service.price}</span>
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </motion.li>
              ))}
              <li>
                <a 
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* IT Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">{service.price}</span>
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </motion.li>
              ))}
              <li>
                <a 
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Micro SAAS & Emerging Tech */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2 mb-6">
              {microSaasServices.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">{service.price}</span>
                  </Link>
                </motion.li>
              ))}
              <li>
                <a 
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Emerging Tech
            </h3>
            <ul className="space-y-2">
              {emergingTech.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.phone}</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</a></li>
              <li><a href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</a></li>
              <li><a href="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <motion.button 
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-700/50"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
});

EnhancedFooter.displayName = 'EnhancedFooter';
export default EnhancedFooter;