import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  DollarSign,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Core Services',
      icon: Rocket,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
      ]
    },
    {
      title: 'AI & Innovation',
      icon: Brain,
      links: [
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Shield,
      links: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    {
      title: 'Enterprise Tools',
      icon: Zap,
      links: [
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Returns Management', href: '/services/returns-management' },
        { name: 'Email Sequencer', href: '/services/email-sequencer' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Star },
    { name: 'Services', href: '/services', icon: Rocket },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Help', href: '/help', icon: HelpCircle },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: Shield },
    { name: 'Sitemap', href: '/sitemap.xml', icon: Globe }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-neon">
                    ZION
                  </div>
                  <div className="text-sm text-cyan-400 font-medium">TECH GROUP</div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Leading the future of technology with innovative AI, quantum computing, 
                and cutting-edge solutions that transform businesses and drive innovation.
              </motion.p>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-purple-300 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <Globe className="w-4 h-4" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors duration-300">
                    {contactInfo.website}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Service Sections */}
            {footerSections.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-3 h-3 text-cyan-400" />
                  </div>
                  <h3 className="text-cyan-400 font-semibold text-lg">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-cyan-400/20 pt-8 mb-8"
          >
            <h3 className="text-cyan-400 font-semibold mb-4 text-lg flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center group"
                >
                  <link.icon className="w-3 h-3 mr-2" />
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-cyan-400/20 pt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social Links */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 text-lg flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 text-lg flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800/30 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <motion.button 
                    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 btn-futuristic"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-cyan-400/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} ZION Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap.xml" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by ZION Team</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-10 left-10 opacity-20 floating-element">
        <Brain className="w-8 h-8 text-cyan-400 animate-bounce" />
      </div>
      <div className="absolute top-20 right-20 opacity-20 floating-element">
        <Rocket className="w-8 h-8 text-purple-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 floating-element">
        <Zap className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 floating-element">
        <Shield className="w-8 h-8 text-purple-400 animate-bounce delay-1000" />
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-20 floating-element">
        <Star className="w-6 h-6 text-cyan-400 animate-pulse delay-500" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20 floating-element">
        <Sparkles className="w-6 h-6 text-purple-400 animate-bounce delay-700" />
      </div>
    </footer>
  );
};