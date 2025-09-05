import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _ArrowRight, _Star, _Shield, _Brain, _DollarSign, _Dna, _Rocket, _Users, _Award, _Zap, _Facebook, _Twitter, _Linkedin, _Instagram, _Youtube, _Github} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Automation', _services: [
      { name: 'AI Autonomous Business Processor', _href: '/ai-autonomous-business-processor'},
      {_name: 'AI Predictive Enterprise Analytics', _href: '/ai-predictive-enterprise-analytics'},
      {_name: 'AI Autonomous Customer Success', _href: '/ai-autonomous-customer-success'},
      {_name: 'AI Autonomous Marketing Orchestrator', _href: '/ai-autonomous-marketing-orchestrator'},
      {_name: 'AI Autonomous Sales Intelligence', _href: '/ai-autonomous-sales-intelligence'}
    ]
  },
  {_title: 'Cybersecurity & Quantum', _services: [
      { name: 'Quantum Encryption Platform', _href: '/quantum-encryption-platform'},
      {_name: 'AI Autonomous Threat Hunter', _href: '/ai-autonomous-threat-hunter'},
      {_name: 'Quantum Zero Trust Security', _href: '/quantum-zero-trust-security'},
      {_name: 'AI Autonomous Vulnerability Scanner', _href: '/ai-autonomous-vulnerability-scanner'},
      {_name: 'Quantum Secure Communication', _href: '/quantum-secure-communication'}
    ]
  },
  {_title: 'Fintech & Blockchain', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform'},
      {_name: 'AI Autonomous Wealth Management', _href: '/ai-autonomous-wealth-management'},
      {_name: 'Quantum Blockchain Finance', _href: '/quantum-blockchain-finance'},
      {_name: 'AI Autonomous Insurance Platform', _href: '/ai-autonomous-insurance-platform'},
      {_name: 'Quantum Payment Processing', _href: '/quantum-payment-processing'}
    ]
  },
  {_title: 'Healthcare & Biotech', _services: [
      { name: 'AI Autonomous Medical Diagnostics', _href: '/ai-autonomous-medical-diagnostics'},
      {_name: 'Quantum Drug Discovery Platform', _href: '/quantum-drug-discovery-platform'},
      {_name: 'AI Autonomous Patient Care', _href: '/ai-autonomous-patient-care'},
      {_name: 'Quantum Genomic Analysis', _href: '/quantum-genomic-analysis'},
      {_name: 'AI Autonomous Clinical Trials', _href: '/ai-autonomous-clinical-trials'}
    ]
  }
];

const _companyLinks = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Leadership Team', _href: '/leadership'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'News & Press', _href: '/news'},
  {_name: 'Partners', _href: '/partners'},
  {_name: 'Investors', _href: '/investors'},
  {_name: 'Contact Us', _href: '/contact'},
  {_name: 'Locations', _href: '/locations'}
];

const _resourceLinks = [
  {_name: 'Documentation', _href: '/docs'},
  {_name: 'API Reference', _href: '/api-documentation'},
  {_name: 'Case Studies', _href: '/case-studies'},
  {_name: 'Blog & News', _href: '/blog'},
  {_name: 'Support Center', _href: '/support'},
  {_name: 'Training & Certification', _href: '/training'},
  {_name: 'Community Forum', _href: '/community'},
  {_name: 'Developer Resources', _href: '/developer-resources'}
];

const _socialLinks = [
  {_name: 'Facebook', _href: '#', _icon: Facebook},
  {_name: 'Twitter', _href: '#', _icon: Twitter},
  {_name: 'LinkedIn', _href: '#', _icon: Linkedin},
  {_name: 'Instagram', _href: '#', _icon: Instagram},
  {_name: 'YouTube', _href: '#', _icon: Youtube},
  {_name: 'GitHub', _href: '#', _icon: Github}
];

export default function UltraFuturisticFooter2026() {_return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {_/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {_/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of revolutionary AI automation, quantum cybersecurity, fintech blockchain, 
                and healthcare biotech solutions. Transforming businesses with cutting-edge technology.
              </p>
              
              {_/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{_contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{_contactInfo.address}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{_contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {_/* Service Categories */}
          {_serviceCategories.map(_(category, _index) => (_<motion.div
              key={index}
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {_category.title === 'AI & Automation' && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                {_category.title === 'Cybersecurity & Quantum' && <Shield className="w-5 h-5 mr-2 text-red-400" />}
                {_category.title === 'Fintech & Blockchain' && <DollarSign className="w-5 h-5 mr-2 text-green-400" />}
                {_category.title === 'Healthcare & Biotech' && <Dna className="w-5 h-5 mr-2 text-blue-400" />}
                {_category.title}
              </h4>
              <ul className="space-y-2">
                {_category.services.map((service, _serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={_service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {_service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {_/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {_/* Company Links */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6, _delay: 0.2}}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {_companyLinks.map(_(link, _index) => (
                <li key={index}>
                  <Link 
                    href={_link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {_link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {_/* Resources */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6, _delay: 0.3}}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Resources
            </h4>
            <ul className="space-y-2">
              {_resourceLinks.map(_(link, _index) => (
                <li key={index}>
                  <Link 
                    href={_link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {_link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {_/* Social Media */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6, _delay: 0.4}}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 mr-2 text-pink-400" />
              Follow Us
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {_socialLinks.map(_(social, _index) => (
                <Link
                  key={index}
                  href={_social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {_/* Newsletter Signup */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.5}}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest AI, quantum computing, and emerging technology insights. 
              Be the first to know about breakthrough solutions and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {_/* Bottom Bar */}
        <motion.div
          initial={_{ opacity: 0}}
          whileInView={_{ opacity: 1}}
          transition={_{ duration: 0.6, _delay: 0.6}}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                Trusted by 2500+ Companies
              </div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-cyan-400 text-sm font-semibold">
                99.9% Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}