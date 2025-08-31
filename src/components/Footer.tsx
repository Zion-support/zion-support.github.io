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
        { name: 'AI Solutions', href: '/solutions' },
        { name: 'IT Services', href: '/solutions' },
        { name: 'Cloud & DevOps', href: '/solutions' },
        { name: 'Cybersecurity', href: '/solutions' },
        { name: 'Micro SAAS', href: '/solutions' },
        { name: 'Digital Transformation', href: '/solutions' }
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
        { name: 'About Us', href: '/about/team' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/documentation' },
        { name: 'API Reference', href: '/documentation' },
        { name: 'Support Center', href: '/help' },
        { name: 'Training', href: '/documentation' },
        { name: 'Blog', href: '/blog' },
        { name: 'Research', href: '/documentation' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      text: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '123 Innovation Drive, Tech City, TC 12345',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
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
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
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
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-5 h-5 text-blue-400" />
                    <span>{contact.text}</span>
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
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
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
              <Shield className="w-5 h-5 text-blue-400" />
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
                <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
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
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>
    </footer>
  );
};

export default Footer;