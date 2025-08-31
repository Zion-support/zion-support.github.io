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
  Github,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'AI Solutions', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cybersecurity', href: '/services/ai-cybersecurity-suite' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Edge & IoT', href: '/services/ai-iot-edge-computing-platform' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Enterprise', href: '/enterprise' },
      { name: 'Healthcare', href: '/healthcare' },
      { name: 'Financial', href: '/financial-solutions' },
      { name: 'Manufacturing', href: '/manufacturing-solutions' },
      { name: 'Government', href: '/government-solutions' },
      { name: 'Retail', href: '/retail-solutions' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Events', href: '/news' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training', href: '/training' },
      { name: 'Community', href: '/community' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

const contactInfo = [
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

const features = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security and compliance' },
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized for maximum performance' },
  { icon: Brain, title: 'AI-Powered', description: 'Intelligent automation and insights' },
  { icon: Cloud, title: 'Cloud-Native', description: 'Built for the modern cloud' }
];

export const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future with AI-powered solutions, quantum computing, and innovative micro-SaaS services. 
                We transform businesses through cutting-edge technology and strategic innovation.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50"
                  >
                    <feature.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-slate-700/50 hover:border-slate-600/50`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can transform your business and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.text}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <contact.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{contact.text}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};