import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  ArrowUp,
  Shield,
  Award,
  Users,
  Clock,
  Brain,
  Cpu,
  Cloud,
  Zap,
  Rocket,
  Database,
  Network,
  Code,
  Server,
  Chip,
  Lock,
  BarChart3,
  Target,
  Handshake,
  Lightbulb,
  Building2,
  Factory,
  Car,
  ShoppingCart,
  GraduationCap,
  Heart,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Calendar,
  FileText,
  BookOpen,
  Video,
  Headphones,
  HelpCircle,
  Settings,
  Palette,
  Layers,
  Zap as Lightning,
  TrendingUp,
  CheckCircle,
  Star,
  Globe as World,
  Shield as Security,
  Users as Team,
  Award as Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI Solutions',
      icon: Brain,
      links: [
        { name: 'AI Development', href: '/ai-services', description: 'Custom AI solutions' },
        { name: 'AI Healthcare', href: '/services', description: 'Medical AI platforms' },
        { name: 'AI Finance', href: '/services', description: 'Financial AI tools' },
        { name: 'AI Marketing', href: '/services', description: 'Marketing automation' },
        { name: 'AI Content', href: '/services', description: 'Content generation' },
        { name: 'AI Analytics', href: '/services', description: 'Business intelligence' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      links: [
        { name: 'Cloud & DevOps', href: '/services', description: 'Infrastructure solutions' },
        { name: 'Cybersecurity', href: '/services', description: 'Security platforms' },
        { name: 'Data Analytics', href: '/services', description: 'Business intelligence' },
        { name: 'Digital Twin', href: '/services', description: 'IoT & simulation' },
        { name: 'Network Security', href: '/services', description: 'Advanced protection' },
        { name: 'Infrastructure', href: '/services', description: 'Scalable systems' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      links: [
        { name: 'Business Tools', href: '/services', description: 'Operational efficiency' },
        { name: 'Industry Solutions', href: '/industry-solutions', description: 'Sector-specific tools' },
        { name: 'Enterprise Platforms', href: '/enterprise', description: 'Large-scale solutions' },
        { name: 'Startup Solutions', href: '/services', description: 'Growth acceleration' },
        { name: 'Custom Software', href: '/services', description: 'Tailored solutions' },
        { name: 'API Development', href: '/services', description: 'Integration services' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      links: [
        { name: 'Quantum Computing', href: '/services', description: 'Quantum solutions' },
        { name: 'Blockchain', href: '/services', description: 'Distributed systems' },
        { name: 'Edge Computing', href: '/services', description: 'IoT & edge platforms' },
        { name: 'Space Tech', href: '/services', description: 'Aerospace solutions' },
        { name: 'Metaverse', href: '/services', description: 'Virtual worlds' },
        { name: 'IoT Solutions', href: '/services', description: 'Connected devices' }
      ]
    }
  ];

  const solutionsSections = [
    {
      title: 'Enterprise',
      icon: Building2,
      links: [
        { name: 'Large-scale Solutions', href: '/enterprise', description: 'Enterprise platforms' },
        { name: 'Digital Transformation', href: '/digital-transformation', description: 'Business modernization' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Scalable infrastructure' },
        { name: 'Security & Compliance', href: '/services', description: 'Enterprise security' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Factory,
      links: [
        { name: 'Healthcare', href: '/industry-solutions', description: 'Medical technology' },
        { name: 'Manufacturing', href: '/industry-solutions', description: 'Industry 4.0' },
        { name: 'Financial Services', href: '/industry-solutions', description: 'Fintech solutions' },
        { name: 'Retail & E-commerce', href: '/industry-solutions', description: 'Digital commerce' }
      ]
    }
  ];

  const companySections = [
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'About Us', href: '/about', description: 'Our story' },
        { name: 'Our Team', href: '/about', description: 'Meet the experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic alliances' },
        { name: 'News & Updates', href: '/news', description: 'Latest developments' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'API Reference', href: '/api', description: 'Developer resources' },
        { name: 'Support Center', href: '/support', description: 'Help & assistance' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'Research', href: '/research', description: 'Innovation studies' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us an email'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008 Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      text: '24/7 Support Available',
      href: '/contact',
      description: 'Always here to help'
    }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/contact', icon: Rocket },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Status', href: '/status', icon: Activity },
    { name: 'Security', href: '/security', icon: ShieldCheck }
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Innovation Hub</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of innovative AI, IT, and micro SAAS solutions. We help businesses transform 
              through cutting-edge technology and intelligent automation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <contact.icon className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {contact.text}
                    </div>
                    <div className="text-xs text-gray-500">{contact.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solutions & Company Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {solutionsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {companySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span>Global Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;