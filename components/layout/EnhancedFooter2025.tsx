import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Star, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Zap, Globe, Database, Lock, Cloud, BarChart3,
  Twitter, Linkedin, Github, Youtube, Instagram
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: Target,
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro' },
      { name: 'DataVault Hub', href: '/data-vault-hub' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
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

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' }
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
];

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50">
            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                Stay Ahead of the Future
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-6 max-w-2xl mx-auto"
              >
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-cyan-500/20 bg-black/50 backdrop-blur-sm"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with the Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Subscribe to newsletter"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950/50 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" aria-label="Security status indicator"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" aria-label="Performance status indicator"></div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ by Zion Tech Group</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-label="Company status indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter2025;