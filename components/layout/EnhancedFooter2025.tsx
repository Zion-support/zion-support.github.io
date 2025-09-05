<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Star, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Zap, Globe, Database, Lock, Cloud, BarChart3,
  Twitter, Linkedin, Github, Youtube, Instagram
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
=======
import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Star, _ArrowRight, _Brain, _Atom, _Shield, _Rocket, _Target, _Microscope, _Zap, _Globe, _Database, _Lock, _Cloud, _BarChart3, _Twitter, _Linkedin, _Github, _Youtube, _Instagram} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: 'AI & Consciousness', _icon: Brain, _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029'},
      {_name: 'Quantum AI Fusion', _href: '/quantum-ai-fusion'},
      {_name: 'Multimodal AI Orchestrator', _href: '/multimodal-ai-orchestrator'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance'}
    ]
  },
  {_title: 'Quantum & Emerging Tech', _icon: Atom, _services: [
      { name: 'Space Mining Platform', _href: '/space-mining-platform'},
      {_name: 'Quantum Bio-Computing', _href: '/quantum-bio-computing'},
      {_name: 'Brain-Computer Interface', _href: '/brain-computer-interface'},
      {_name: 'Quantum Energy Platform', _href: '/quantum-energy-platform'},
      {_name: 'Autonomous Vehicle AI', _href: '/autonomous-vehicle-ai'}
    ]
  },
  {_title: 'Enterprise IT', _icon: Shield, _services: [
      { name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'},
      {_name: 'Edge Computing Orchestrator', _href: '/edge-computing-orchestrator'},
      {_name: 'Zero Trust Security Platform', _href: '/zero-trust-security-platform'},
      {_name: 'Blockchain Enterprise Platform', _href: '/blockchain-enterprise-platform'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops'}
    ]
  },
  {_title: 'Micro SAAS', _icon: Target, _services: [
      { name: 'AI Content Factory Pro', _href: '/ai-content-factory'},
      {_name: 'Quantum CRM Suite', _href: '/quantum-crm'},
      {_name: 'CyberShield Pro', _href: '/cyber-shield-pro'},
      {_name: 'DataVault Hub', _href: '/data-vault-hub'},
      {_name: 'DevOps Automation Studio', _href: '/devops-automation-studio'}
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

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' }
],

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
],

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear(),

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50&quot;>
=======
const _companyLinks = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'News', _href: '/news'},
  {_name: 'Case Studies', _href: '/case-studies'},
  {_name: 'Blog', _href: '/blog'},
  {_name: 'Resources', _href: '/resources'}
];

const _legalLinks = [
  {_name: 'Privacy Policy', _href: '/privacy'},
  {_name: 'Terms of Service', _href: '/terms'},
  {_name: 'Cookie Policy', _href: '/cookies'},
  {_name: 'GDPR Compliance', _href: '/gdpr'}
];

const _socialLinks = [
  {_name: 'Twitter', _href: '#', _icon: Twitter, _color: 'hover:text-blue-400'},
  {_name: 'LinkedIn', _href: '#', _icon: Linkedin, _color: 'hover:text-blue-600'},
  {_name: 'GitHub', _href: '#', _icon: Github, _color: 'hover:text-gray-400'},
  {_name: 'YouTube', _href: '#', _icon: Youtube, _color: 'hover:text-red-400'},
  {_name: 'Instagram', _href: '#', _icon: Instagram, _color: 'hover:text-pink-400'}
];

const EnhancedFooter2025: React.FC = () => {_const _currentYear = new Date().getFullYear();

  return (_<footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {/* Background Effects */}
      <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5&quot;></div>
      
<<<<<<< HEAD
      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12&quot;>
            {/* Company Info */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center&quot;>
                  <Star className=&quot;w-7 h-7 text-white&quot; />
=======
      <div className="relative z-10">
        {_/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {_/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div>
                  <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </div>
                  <div className=&quot;text-sm text-gray-400&quot;>Future Technology Solutions</div>
                </div>
              </div>
              
<<<<<<< HEAD
              <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the future with revolutionary AI, _quantum computing, _and emerging technology solutions that transform businesses worldwide.
              </p>

              {_/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </div>

            {_/* Service Categories */}
            {_serviceCategories.map((category, _index) => (_<motion.div
                key={category.title}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;space-y-4&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="space-y-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex items-center space-x-3&quot;>
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                    <category.icon className=&quot;w-4 h-4 text-white&quot; />
                  </div>
<<<<<<< HEAD
                  <h3 className=&quot;text-lg font-semibold text-white&quot;>{category.title}</h3>
                </div>
                
                <div className=&quot;space-y-2&quot;>
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className=&quot;block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
                    >
                      {service.name}
                    </a>
=======
                  <h3 className="text-lg font-semibold text-white">{_category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {_category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={_service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {_service.name}
                    </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
          {/* Additional Links */}
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50&quot;>
            {/* Company Links */}
            <div>
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Company</h4>
              <div className=&quot;space-y-2&quot;>
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className=&quot;block text-gray-400 hover:text-white transition-colors duration-200 text-sm&quot;
                  >
                    {link.name}
                  </a>
=======
          {_/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50">
            {_/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                {_companyLinks.map(_(link) => (
                  <Link
                    key={link.name}
                    href={_link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {_link.name}
                  </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </div>
            </div>

            {_/* Legal Links */}
            <div>
<<<<<<< HEAD
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Legal</h4>
              <div className=&quot;space-y-2&quot;>
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className=&quot;block text-gray-400 hover:text-white transition-colors duration-200 text-sm&quot;
                  >
                    {link.name}
                  </a>
=======
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                {_legalLinks.map(_(link) => (
                  <Link
                    key={link.name}
                    href={_link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {_link.name}
                  </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </div>
            </div>

            {_/* Social Links */}
            <div>
<<<<<<< HEAD
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Follow Us</h4>
              <div className=&quot;flex space-x-4&quot;>
                {socialLinks.map((social) => (
=======
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {_socialLinks.map(_(social) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <a
                    key={social.name}
                    href={_social.href}
                    className={_`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={_social.name}
                  >
                    <social.icon className=&quot;w-5 h-5&quot; />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Newsletter Section */}
        <div className=&quot;border-t border-gray-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
            <div className=&quot;text-center&quot;>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=&quot;text-2xl md:text-3xl font-bold text-white mb-4&quot;
=======
        {_/* Newsletter Section */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h3
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                viewport={_{ once: true}}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Stay Ahead of the Future
              </motion.h3>
              <motion.p
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-gray-400 mb-6 max-w-2xl mx-auto&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 0.1}}
                viewport={_{ once: true}}
                className="text-gray-400 mb-6 max-w-2xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </motion.p>
              
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 0.2}}
                viewport={_{ once: true}}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email&quot;
                  className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                />
                <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;>
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className=&quot;border-t border-gray-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
              <div className=&quot;text-gray-400 text-sm&quot;>
                © {currentYear} Zion Tech Group. All rights reserved.
=======
        {_/* Bottom Bar */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {_currentYear} Zion Tech Group. All rights reserved.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              
              <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                  <span>Trusted by 1000+ companies worldwide</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <div className=&quot;w-2 h-2 bg-green-400 rounded-full&quot;></div>
                  <span>99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
},

export default EnhancedFooter2025,