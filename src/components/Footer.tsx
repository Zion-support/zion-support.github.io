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
  Clock
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
        { name: 'AI Solutions', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud & DevOps', href: '/services' },
        { name: 'Cybersecurity', href: '/services' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Digital Transformation', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'Healthcare Tech', href: '/solutions' },
        { name: 'Financial Solutions', href: '/solutions' },
        { name: 'Manufacturing', href: '/solutions' },
        { name: 'Government', href: '/solutions' },
        { name: 'Retail Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Research', href: '/research' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-300' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  const trustIndicators = [
    { icon: Shield, text: 'SOC 2 Compliant', color: 'text-green-400' },
    { icon: Award, text: 'ISO 27001 Certified', color: 'text-blue-400' },
    { icon: Users, text: '500+ Clients Served', color: 'text-purple-400' },
    { icon: Clock, text: '24/7 Support', color: 'text-cyan-400' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Z</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                    <div className="text-sm text-gray-400">Innovation Hub</div>
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI, quantum computing, and innovative technology solutions that transform businesses worldwide.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                    <span className="text-sm text-gray-400">{indicator.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <div className="border-t border-slate-700/50 pt-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span>Global Services Available</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-cyan-400 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6">Get the latest insights on AI, technology trends, and industry updates.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Made with</span>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;