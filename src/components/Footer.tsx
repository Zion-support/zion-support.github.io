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
  ArrowRight,
  Download,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Star,
  CheckCircle,
  Zap,
  Brain,
  Cloud,
  Cpu,
  Shield as ShieldIcon,
  Handshake,
  Code,
  BarChart3,
  MessageCircle,
  GitBranch
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
        { name: 'AI Edge Computing', href: '/services/ai-edge-computing-platform', icon: Cpu },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-platform', icon: BarChart3 },
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: MessageCircle },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform', icon: GitBranch },
        { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Zap }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise', icon: Shield },
        { name: 'Healthcare Technology', href: '/industry-solutions', icon: Users },
        { name: 'Financial Services', href: '/industry-solutions', icon: Award },
        { name: 'Manufacturing', href: '/industry-solutions', icon: Cpu },
        { name: 'Government & Defense', href: '/industry-solutions', icon: Shield },
        { name: 'Retail & E-commerce', href: '/industry-solutions', icon: Globe }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/about', icon: Users },
        { name: 'Careers', href: '/careers', icon: Award },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News & Updates', href: '/news', icon: Calendar },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Support Center', href: '/support', icon: Headphones },
        { name: 'Training Programs', href: '/training', icon: Video },
        { name: 'Blog & Insights', href: '/blog', icon: BookOpen },
        { name: 'Research Papers', href: '/research', icon: Download }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:bg-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:bg-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:bg-blue-700' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:bg-pink-600' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:bg-gray-700' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
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
      text: 'Middletown, DE 19709',
      href: 'https://maps.google.com/?q=Middletown,DE',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#',
      description: 'Business hours'
    }
  ];

  const quickActions = [
    {
      title: 'Download Resources',
      description: 'Get our latest whitepapers, case studies, and technical guides',
      icon: Download,
      href: '/resources',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Schedule Demo',
      description: 'See our solutions in action with a personalized demonstration',
      icon: Calendar,
      href: '/contact',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Join Webinar',
      description: 'Attend our upcoming webinars on emerging technologies',
      icon: Video,
      href: '/webinars',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={action.title}
                to={action.href}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {action.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  {action.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Middle Section - Contact & Social */}
        <div className="border-t border-slate-700 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-medium">{contact.text}</span>
                      <p className="text-sm text-gray-500">{contact.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Follow Our Journey
              </h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest innovations, industry insights, and technology trends.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-slate-700 ${social.color} rounded-lg flex items-center justify-center transition-all duration-200 group`}
                    title={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Zion Tech Group</span>
              <span>•</span>
              <span>Trusted Technology Partner</span>
            </motion.div>

            {/* Copyright & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>
    </footer>
  );
};

export default Footer;