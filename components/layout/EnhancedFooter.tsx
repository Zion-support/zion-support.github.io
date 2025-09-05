<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
=======
import React from 'react';
import {_Phone, _Mail, _MapPin, _Globe, _Twitter, _Linkedin, _Facebook, _Instagram, _ArrowRight, _Rocket, _Brain, _Cpu, _Shield, _Star, _Users, _TrendingUp, _Zap} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: 'Next-Generation AI', _services: [
      { name: 'AI Multimodal Fusion', _href: '/ai-multimodal-fusion-platform'},
      {_name: 'AI Autonomous Decision Engine', _href: '/ai-autonomous-decision-engine'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-platform'},
      {_name: 'AI Quantum Hybrid Computing', _href: '/ai-quantum-hybrid-computing'}
    ]
  },
  {_title: 'Cutting-Edge IT', _services: [
      { name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration'},
      {_name: '5G Private Networks', _href: '/5g-private-network-solutions'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform'}
    ]
  },
  {_title: 'Innovative SaaS', _services: [
      { name: 'AI Brand Personality', _href: '/ai-brand-personality-generator'},
      {_name: 'Virtual Event Holograms', _href: '/virtual-event-hologram-platform'},
      {_name: 'AI Meeting Transcriber', _href: '/ai-meeting-transcriber-pro'},
      {_name: 'AI Mental Health Companion', _href: '/ai-mental-health-companion'}
    ]
  }
],

<<<<<<< HEAD
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
],

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status Page', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe }],

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear(),

  return (
    <footer className=&quot;bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50&quot;>
      {/* Main Footer Content */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-1&quot;>
=======
const _companyLinks = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'News', _href: '/news'},
  {_name: 'Case Studies', _href: '/case-studies'},
  {_name: 'Blog', _href: '/blog'},
  {_name: 'Resources', _href: '/resources'}
];

const _supportLinks = [
  {_name: 'Contact Support', _href: '/contact'},
  {_name: 'Documentation', _href: '/docs'},
  {_name: 'API Reference', _href: '/api'},
  {_name: 'Status Page', _href: '/status'},
  {_name: 'Security', _href: '/security'},
  {_name: 'Privacy Policy', _href: '/privacy'}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://www.linkedin.com/company/zion-tech-group', _icon: Linkedin},
  {_name: 'Instagram', _href: 'https://www.instagram.com/ziontechgroup', _icon: Instagram},
  {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Globe}];

export default function EnhancedFooter() {_const _currentYear = new Date().getFullYear();

  return (_<footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {_/* Company Info */}
          <div className="lg:col-span-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
            >
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center&quot;>
                  <Rocket className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <div>
                  <div className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </div>
                  <div className=&quot;text-sm text-gray-400&quot;>Revolutionary Technology</div>
                </div>
              </div>
              
<<<<<<< HEAD
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                Leading provider of 600+ revolutionary AI, quantum computing, and IT services. 
                Delivering 1000% ROI through cutting-edge solutions that transform businesses.
              </p>
              
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-green-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of 600+ revolutionary AI, _quantum computing, _and IT services. 
                Delivering 1000% ROI through cutting-edge solutions that transform businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{_contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </motion.div>
          </div>

          {_/* Service Categories */}
          {_serviceCategories.map((category, _index) => (_<motion.div
              key={category.title}
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h3 className=&quot;text-lg font-semibold text-white mb-6&quot;>{category.title}</h3>
              <ul className=&quot;space-y-3&quot;>
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group&quot;
                    >
                      <ArrowRight className=&quot;w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200&quot; />
                      {service.name}
=======
              <h3 className="text-lg font-semibold text-white mb-6">{_category.title}</h3>
              <ul className="space-y-3">
                {_category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={_service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {_service.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Additional Links */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-700/50&quot;>
          {/* Company & Support Links */}
          <div className=&quot;grid grid-cols-2 gap-8&quot;>
=======
        {_/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-700/50">
          {_/* Company & Support Links */}
          <div className="grid grid-cols-2 gap-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Company</h4>
              <ul className=&quot;space-y-3&quot;>
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
=======
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {_companyLinks.map(_(link) => (
                  <li key={link.name}>
                    <a
                      href={_link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.3}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Support</h4>
              <ul className=&quot;space-y-3&quot;>
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
=======
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {_supportLinks.map(_(link) => (
                  <li key={link.name}>
                    <a
                      href={_link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

<<<<<<< HEAD
          {/* Stats & Social */}
          <div className=&quot;grid grid-cols-1 gap-8&quot;>
=======
          {_/* Stats & Social */}
          <div className="grid grid-cols-1 gap-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.4}}
              viewport={_{ once: true}}
            >
              <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Our Impact</h4>
              <div className=&quot;grid grid-cols-2 gap-4&quot;>
                <div className=&quot;text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                  <div className=&quot;text-2xl font-bold text-cyan-400&quot;>600+</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Services</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                  <div className=&quot;text-2xl font-bold text-purple-400&quot;>1000%</div>
                  <div className=&quot;text-xs text-gray-400&quot;>ROI</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                  <div className=&quot;text-2xl font-bold text-green-400&quot;>24/7</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Support</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                  <div className=&quot;text-2xl font-bold text-pink-400&quot;>99.9%</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.5}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Follow Us</h4>
              <div className=&quot;flex space-x-4&quot;>
                {socialLinks.map((social) => {
                  const Icon = social.icon,
                  return (
                    <a
                      key={social.name}
                      href={social.href}
<<<<<<< HEAD
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover: text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
=======
                      className=&quot;w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {_socialLinks.map(_(social) => {
                  const _Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={_social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Icon className=&quot;w-5 h-5&quot; />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {_/* Newsletter Signup */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className=&quot;mt-12 pt-12 border-t border-gray-700/50&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.6}}
          viewport={_{ once: true}}
          className="mt-12 pt-12 border-t border-gray-700/50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;text-center&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Stay Updated with Latest Innovations
            </h3>
            <p className=&quot;text-gray-400 mb-6 max-w-2xl mx-auto&quot;>
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl&quot;>
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
      <div className=&quot;border-t border-gray-700/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
            <div className=&quot;text-gray-400 text-sm&quot;>
              © {currentYear} Zion Tech Group. All rights reserved.
=======
      {_/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {_currentYear} Zion Tech Group. All rights reserved.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
<<<<<<< HEAD
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/terms" className="hover: text-cyan-400 transition-colors duration-200">
=======
            <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
              <a href=&quot;/terms&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Terms of Service
              </a>
              <a href=&quot;/privacy&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                Privacy Policy
              </a>
              <a href=&quot;/cookies&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
