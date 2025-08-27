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
  Youtube, 
  Github,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Target,
  TrendingUp,
  Award,
  Building,
  Lock,
  Cpu,
  Globe as GlobeIcon,
  Leaf,
  Satellite,
  Banknote,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';

export function EnhancedFuturisticFooter() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: 'Zion Tech Group',
    description: 'Revolutionary AI, Quantum Computing, and emerging technology solutions that are transforming industries worldwide.',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'AI & Analytics',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Creation', href: '/services/llm-content-studio' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Zap,
      services: [
        { name: 'Quantum Computing as a Service', href: '/services/quantum-computing' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-computing' },
        { name: 'Quantum Supply Chain', href: '/services2027' },
        { name: 'Quantum Cryptography', href: '/services2027' },
        { name: 'Quantum Neural Networks', href: '/services2027' }
      ]
    },
    {
      title: 'Blockchain & DeFi',
      icon: Lock,
      services: [
        { name: 'DeFi Yield Optimization', href: '/services2027' },
        { name: 'Smart Contract Security', href: '/services' },
        { name: 'Blockchain Development', href: '/services' },
        { name: 'NFT Platforms', href: '/services' },
        { name: 'DeFi Analytics', href: '/services2027' }
      ]
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cpu,
      services: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Smart City Solutions', href: '/services2027' },
        { name: 'Industrial IoT', href: '/services' },
        { name: 'Edge AI Inference', href: '/services' },
        { name: 'IoT Security', href: '/services' }
      ]
    }
  ];

  const emergingTech = [
    {
      title: 'Metaverse & AR/VR',
      icon: Eye,
      href: '/services2027'
    },
    {
      title: 'Space Technology',
      icon: Satellite,
      href: '/services/space-tech'
    },
    {
      title: 'Green Technology',
      icon: Leaf,
      href: '/services/green-it'
    },
    {
      title: 'FinTech Solutions',
      icon: Banknote,
      href: '/services2027'
    },
    {
      title: 'Autonomous Systems',
      icon: Rocket,
      href: '/services2027'
    },
    {
      title: 'Healthcare AI',
      icon: Heart,
      href: '/services2027'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs' },
    { name: 'Training Programs', href: '/training' },
    { name: 'Support Portal', href: '/support' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          {/* Top Section - Company Info & Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
            {/* Company Information */}
            <div className="lg:col-span-2 xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {companyInfo.description}
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3 text-purple-400" />
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-pink-400 mt-1 flex-shrink-0" />
                    <span>{companyInfo.address}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="w-4 h-4 mr-3 text-green-400" />
                    <a href={companyInfo.website} className="hover:text-white transition-colors">
                      {companyInfo.website}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {React.createElement(category.icon, {
                    className: "w-5 h-5 mr-2 text-cyan-400"
                  })}
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Emerging Technology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {emergingTech.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <Link
                    to={tech.href}
                    className="block p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                  >
                    {React.createElement(tech.icon, {
                      className: "w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    })}
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                      {tech.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Get the latest insights on emerging technologies and industry trends.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
                  >
                    {React.createElement(social.icon, { className: "w-5 h-5" })}
                  </a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-right"
              >
                <p className="text-gray-400 text-sm">
                  © {currentYear} {companyInfo.name}. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Revolutionizing technology, one innovation at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000"></div>
      </div>
    </footer>
  );
}