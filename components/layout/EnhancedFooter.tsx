<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react;
import Link from 'next/link;
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react;
const EnhancedFooter = () => {;
  return (;
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-2 mb-4">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div className="text-xl font-bold">Zion Tech Group</div>;
            </div>;
            <p className="text-gray-300 mb-4">;
              Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.;
            </p>;
            <div className="flex space-x-4">;
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>;
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>;
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>;
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>;
            </div>;
          </div>;
>>>>>>> origin/automation-fixes

const EnhancedFooter: React.FC = () => {
<<<<<<< HEAD
=======
import Link from 'next/link';

<<<<<<< HEAD
const EnhancedFooter: React.FC = () => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3ded
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/ai-development" className="hover:text-blue-400">AI Development</a></li>
              <li><a href="/services/cloud-services" className="hover:text-blue-400">Cloud Services</a></li>
              <li><a href="/services/web-development" className="hover:text-blue-400">Web Development</a></li>
=======
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case-studies' },
  ];
=======
            <h3 className="text-lg font-semibold mb-4">Contact</h3>;
            <div className="space-y-3">;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-blue-400" />;
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">info@ziontechgroup.com</a>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-blue-400" />;
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-gray-300">123 Tech Street, Innovation District<br />San Francisco, CA 94105</span>;
              </div>;
              <div className="flex items-center space-x-2>                <MapPin className="w-4 h-4 text-blue-400" />"                <span className="text-gray-300>                  123 Tech Street, Innovation District<br />"                  San Francisco, CA 94105</span></div>;
    <footer className="bg-gray-800 text-white py-8">";
      <div className="container mx-auto px-4">";
        <div className="grid md: grid-cols-4 gap-8">;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>";
            <p className="text-gray-300">;
              Leading technology solutions provider for modern businesses.;
            </p>";
            <div className="flex space-x-4">";
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">";
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"  />;
                </svg>;
              </a>";
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">";
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"  />;
                </svg>;
              </a>;
            </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Services</h3>";
            <ul className="space-y-2">";
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>";
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>";
              <li><Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>";
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>;
            </ul>;
          </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Company</h3>";
            <ul className="space-y-2">";
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>";
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>";
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>";
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>;
            </ul>;
          </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Contact</h3>";
            <div className="space-y-2 text-gray-300">;
              <p>Mobile: +1 302 464 0950</p>;
              <p>Email: kleber@ziontechgroup.com</p>;
              <p>Address: 364 E Main St STE 1008<br  />Middletown DE 19709</p>;
            </div>;
        </div>";
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">,
          <p>&copy, 2024 Zion Tech Group. All rights reserved.</p>;
        </div>;
      </div>;
>>>>>>> origin/automation-fixes

  const company = [
    { name: 'About Us', href: '/about' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Leading technology solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/services/web-application-development-chat" className="hover:text-white">Web Application Development</a></li>
              <li><a href="/services/mobile-app-development-chat" className="hover:text-white">Mobile App Development</a></li>
              <li><a href="/services/cloud-migration-services-chat" className="hover:text-white">Cloud Solutions</a></li>
              <li><a href="/services/ai-model-development-chat" className="hover:text-white">AI Integration</a></li>
>>>>>>> 56433e5950f86f3612ddbdabb654ab3429763be2
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
<<<<<<< HEAD
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/docs" className="hover:text-blue-400">Documentation</a></li>
              <li><a href="/support" className="hover:text-blue-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: info@ziontechgroup.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
              </Link>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'Next-Generation AI',
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  },
  {
    title: 'Cutting-Edge IT',
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
  },
  {
    title: 'Innovative SaaS',
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status Page', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe },
];

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Revolutionary Technology</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of 600+ revolutionary AI, quantum computing, and IT services. 
                Delivering 1000% ROI through cutting-edge solutions that transform businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
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
              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-700/50">
          {/* Company & Support Links */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats & Social */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">600+</div>
                  <div className="text-xs text-gray-400">Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400">1000%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-pink-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
>>>>>>> origin/automation/changelog
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
>>>>>>> 56433e5950f86f3612ddbdabb654ab3429763be2
=======
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/services/ai-development"><a className="hover:text-blue-400 transition-colors">AI Development</a></Link></li>
              <li><Link href="/services/cloud-services"><a className="hover:text-blue-400 transition-colors">Cloud Services</a></Link></li>
              <li><Link href="/services/web-development"><a className="hover:text-blue-400 transition-colors">Web Development</a></Link></li>
              <li><Link href="/services/mobile-development"><a className="hover:text-blue-400 transition-colors">Mobile Development</a></Link></li>
              <li><Link href="/services/blockchain-solutions"><a className="hover:text-blue-400 transition-colors">Blockchain Solutions</a></Link></li>
              <li><Link href="/services/data-analytics"><a className="hover:text-blue-400 transition-colors">Data Analytics</a></Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/solutions/enterprise"><a className="hover:text-blue-400 transition-colors">Enterprise Solutions</a></Link></li>
              <li><Link href="/solutions/startup"><a className="hover:text-blue-400 transition-colors">Startup Solutions</a></Link></li>
              <li><Link href="/solutions/iot-platforms"><a className="hover:text-blue-400 transition-colors">IoT Platforms</a></Link></li>
              <li><Link href="/solutions/digital-transformation"><a className="hover:text-blue-400 transition-colors">Digital Transformation</a></Link></li>
              <li><Link href="/solutions/cybersecurity"><a className="hover:text-blue-400 transition-colors">Cybersecurity</a></Link></li>
            </ul>
          </div>

          {/* Contact & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact & Company</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/about"><a className="hover:text-blue-400 transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-blue-400 transition-colors">Contact</a></Link></li>
              <li><Link href="/talent"><a className="hover:text-blue-400 transition-colors">Join Our Team</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-blue-400 transition-colors">Blog</a></Link></li>
              <li><Link href="/privacy-policy"><a className="hover:text-blue-400 transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms-of-service"><a className="hover:text-blue-400 transition-colors">Terms of Service</a></Link></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">Email: info@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved. | Empowering businesses through innovative technology solutions.</p>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3ded
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default EnhancedFooter;
=======
      {/* Bottom Footer */}
<div className="border-t border-gray-700 py-6>        <div className="container mx-auto px-4">"          <div className="flex flex-col md:flex-row justify-between items-center>            <p className="text-gray-300 text-sm">"              &copy; 2024 Zion Tech Group. All rights reserved."            </p>;
            <div className="flex space-x-6 mt-4 md: mt-0>              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors>                Privacy Policy"              </Link>;
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors>                Terms of Service"              </Link>;
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors>                Sitemap"              </Link></div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  ),
"'export default EnhancedFooter}
>>>>>>> origin/automation-fixes
=======
}
>>>>>>> origin/automation/changelog
