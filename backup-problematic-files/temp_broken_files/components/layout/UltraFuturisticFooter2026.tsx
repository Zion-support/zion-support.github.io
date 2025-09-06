import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield,
  Brain, DollarSign, Dna, Rocket, Users, Award, Zap,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github
 from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
,
const serviceCategories = [
  {title: 'AI & Automation', services: [
      { name: 'AI Autonomous Business Processor', href: '/ai-autonomous-business-processor'},
      {name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics'},
      {name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success'},
      {name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator'},
      {name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence'}
    ]
  },
  {title: 'Cybersecurity & Quantum', services: [
      { name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform'},
      {name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter'},
      {name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security'},
      {name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner'},
      {name: 'Quantum Secure Communication', href: '/quantum-secure-communication'}
    ]
  },
  {title: 'Fintech & Blockchain', services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform'},
      {name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management'},
      {name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance'},
      {name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform'},
      {name: 'Quantum Payment Processing', href: '/quantum-payment-processing'}
    ]
  },
  {title: 'Healthcare & Biotech', services: [
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics'},
      {name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform'},
      {name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care'},
      {name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis'},
      {name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials'}
    ]
  }
,

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Locations', href: '/locations' }
,

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Developer Resources', href: '/developer-resources' }
,

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: '#', icon: Github }
,

export default function UltraFuturisticFooter2026() {
  return (
    <footer className=&quot;relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800&quot;>      {/* Background Effects */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_30%20%,rgba(6,182,212,0.05),transparent50%)]&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_70%80%,rgba(139,92,246,0.05),transparent50%)]&quot;></div>
      </div>

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        {/* Main Footer Content */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2&quot;>            <motion.div,
initial={_{ opacity: 0, y: 20}
              whileInView={_{ opacity: 1, y: 0}
              transition={_{ duration: 0.6}
            >
              <div className=&quot;flex items-center mb-6&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4&quot;>
                  <Zap className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h3>
              </div>
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                Leading provider of revolutionary AI automation, quantum cybersecurity, fintech blockchain, 
                and healthcare biotech solutions. Transforming businesses with cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.address}</span>
                </div>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <Globe className=&quot;w-4 h-4 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.website}</span>                </div>
              </div>
            </motion.div>
          </div>

          {_/* Service Categories */}
          {serviceCategories.map(_(category, index) => (_<motion.div,
key={index}
              initial={_{ opacity: 0, y: 20}
              whileInView={_{ opacity: 1, y: 0}
              transition={_{ duration: 0.6, delay: index * 0.1}
            >
              <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
                {category.title = = 'AI & Automation' && <Brain className=&quot;w-5 h-5 mr-2 text-cyan-400&quot; />}
                {category.title = = 'Cybersecurity & Quantum' && <Shield className=&quot;w-5 h-5 mr-2 text-red-400&quot; />}
                {category.title = = 'Fintech & Blockchain' && <DollarSign className=&quot;w-5 h-5 mr-2 text-green-400&quot; />}
                {category.title = = 'Healthcare & Biotech' && <Dna className=&quot;w-5 h-5 mr-2 text-blue-400&quot; />}
                {category.title}
              </h4>
              <ul className=&quot;space-y-2&quot;>
                {category.services.map(service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link,
href={service.href}
                      className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group&quot;
                    >
                      <ArrowRight className=&quot;w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300&quot; />
                      {service.name}
                    </a>                  </li>
                )}
              </ul>;
            </motion.div>;
          )}
        </div>;

        {/* Additional Links */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-12&quot;>
          {/* Company Links */}          <motion.div,
initial={_{ opacity: 0, y: 20}
            whileInView={_{ opacity: 1, y: 0}
            transition={_{ duration: 0.6, delay: 0.2}
          >
            <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
              <Users className=&quot;w-5 h-5 mr-2 text-purple-400&quot; />
              Company
            </h4>
            <ul className=&quot;space-y-2&quot;>
              {companyLinks.map(link, index) => (
                <li key={index}>
                  <Link,
href={link.href}
                    className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm&quot;
                  >
                    {link.name}
                  </a>                </li>
              )}
            </ul>
          </motion.div>

          {_/* Resources */}
          <motion.div,
initial={_{ opacity: 0, y: 20}
            whileInView={_{ opacity: 1, y: 0}
            transition={_{ duration: 0.6, delay: 0.3}
          >
            <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
              <Award className=&quot;w-5 h-5 mr-2 text-yellow-400&quot; />
              Resources
            </h4>
            <ul className=&quot;space-y-2&quot;>
              {resourceLinks.map(link, index) => (
                <li key={index}>
                  <Link,
href={link.href}
                    className=&quot;text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm&quot;
                  >
                    {link.name}
                  </a>                </li>
              )}
            </ul>
          </motion.div>

          {_/* Social Media */}
          <motion.div,
initial={_{ opacity: 0, y: 20}
            whileInView={_{ opacity: 1, y: 0}
            transition={_{ duration: 0.6, delay: 0.4}
          >
            <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
              <Rocket className=&quot;w-5 h-5 mr-2 text-pink-400&quot; />
              Follow Us
            </h4>
            <div className=&quot;grid grid-cols-3 gap-4&quot;>
              {socialLinks.map(social, index) => (
                <Link,
key={index}
                  href={social.href}
                  className=&quot;w-12 h-12 bg-gray-800 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group&quot;                >
                  <social.icon className=&quot;w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300&quot; />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {_/* Newsletter Signup */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.5 }
          className=&quot;bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12&quot;        >
          <div className=&quot;text-center&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Stay Updated with Latest Innovations
            </h3>
            <p className=&quot;text-gray-300 mb-6 max-w-2xl mx-auto&quot;>
              Get exclusive access to our latest AI, quantum computing, and emerging technology insights. 
              Be the first to know about breakthrough solutions and industry trends.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input,
type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300&quot;>
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {_/* Bottom Bar */}
        <motion.div,
initial={ opacity: 0 }
          whileInView={ opacity: 1 }
          transition={ duration: 0.6, delay: 0.6 }
          className=&quot;border-t border-gray-800 pt-8&quot;        >
          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">               2026 Zion Tech Group. All rights reserved. | 
              <Link href=&quot;/privacy&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300 ml-2&quot;>
                Privacy Policy
              </a>
              <span className=&quot;mx-2&quot;>|</span>
              <Link href=&quot;/terms&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300&quot;>
                Terms of Service
              </a>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <div className=&quot;flex items-center text-gray-400 text-sm&quot;>
                <Star className=&quot;w-4 h-4 text-yellow-400 mr-1&quot; />
                Trusted by 2500+ Companies
              </div>
              <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full animate-pulse&quot;></div>
              <div className=&quot;text-cyan-400 text-sm font-semibold&quot;>
                99.9% Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )}