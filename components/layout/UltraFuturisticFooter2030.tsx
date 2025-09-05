<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom,
  Rocket, Shield, Cpu, Target, Microscope, Users,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Heart, Star, Award, CheckCircle
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
import {_Phone, _Mail, _MapPin, _Globe, _Zap, _Brain, _Atom, _Rocket, _Shield, _Cpu, _Target, _Microscope, _Users, _Facebook, _Twitter, _Linkedin, _Instagram, _Youtube, _Github, _ArrowRight, _Heart, _Star, _Award, _CheckCircle} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: '🚀 AI & Consciousness', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotion-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Learning Accelerator', _href: '/quantum-learning-accelerator'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'}
    ]
  },
  {_title: '🧬 Biotech & DNA Computing', _services: [
      { name: 'DNA Computing Platform', _href: '/biotech-dna-computing-platform'},
      {_name: 'Personalized Nutrition', _href: '/biotech-personalized-nutrition'},
      {_name: 'Predictive Health Analytics', _href: '/ai-predictive-health-analytics'},
      {_name: 'Research Automation', _href: '/advanced-research-automation'}
    ]
  },
  {_title: '🏙️ Enterprise IT Solutions', _services: [
      { name: 'Autonomous DevOps', _href: '/autonomous-devops-platform'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center'},
      {_name: 'AI Enterprise Security', _href: '/ai-powered-enterprise-security'},
      {_name: 'Intelligent Data Governance', _href: '/intelligent-data-governance'}
    ]
  },
  {_title: '🌌 Space & Metaverse Tech', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform'},
      {_name: 'Metaverse Digital Reality', _href: '/metaverse-digital-reality-platform'},
      {_name: 'Quantum Research Platform', _href: '/quantum-research-platform'},
      {_name: 'AI Research Assistant', _href: '/ai-research-assistant'}
    ]
  },
  {_title: '🎯 2030 Innovative Micro SAAS', _services: [
      { name: 'AI Business Intelligence Suite 2030', _href: '/ai-business-intelligence-suite-2030'},
      {_name: 'AI Customer Experience Platform 2030', _href: '/ai-customer-experience-platform-2030'},
      {_name: 'AI Marketing Automation Suite 2030', _href: '/ai-marketing-automation-2030'},
      {_name: 'AI HR Management Suite 2030', _href: '/ai-hr-management-suite-2030'}
    ]
  }
],

<<<<<<< HEAD
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
],

const companyInfo = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
],

const certifications = [
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP Authorized'
],

export default function UltraFuturisticFooter2030() {
  return (
    <footer className=&quot;bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden&quot;>
=======
const _quickLinks = [
  {_name: 'Home', _href: '/'},
  {_name: 'Services', _href: '/services'},
  {_name: 'Solutions', _href: '/solutions'},
  {_name: 'Pricing', _href: '/pricing'},
  {_name: 'Resources', _href: '/resources'},
  {_name: 'Case Studies', _href: '/case-studies'},
  {_name: 'Blog', _href: '/blog'},
  {_name: 'Contact', _href: '/contact'}
];

const _companyInfo = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'Press', _href: '/press'},
  {_name: 'Partners', _href: '/partners'},
  {_name: 'Support', _href: '/support'},
  {_name: 'Status', _href: '/status'}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter},
  {_name: 'Facebook', _href: 'https://facebook.com/ziontechgroup', _icon: Facebook},
  {_name: 'Instagram', _href: 'https://instagram.com/ziontechgroup', _icon: Instagram},
  {_name: 'YouTube', _href: 'https://youtube.com/ziontechgroup', _icon: Youtube},
  {_name: 'GitHub', _href: 'https://github.com/ziontechgroup', _icon: Github}
];

const _certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized'
];

export default function UltraFuturisticFooter2030() {_return (
    <footer className="bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {/* Animated Background */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5&quot;></div>
        <div className=&quot;absolute top-0 left-0 w-full h-full&quot;>
          <div className=&quot;absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping&quot;></div>
          <div className=&quot;absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce&quot;></div>
          <div className=&quot;absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse&quot;></div>
        </div>
      </div>

<<<<<<< HEAD
      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {/* Company Info */}
            <div className=&quot;space-y-6&quot;>
              <div className=&quot;flex items-center space-x-3&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center&quot;>
                  <Zap className=&quot;w-6 h-6 text-white&quot; />
=======
      <div className="relative z-10">
        {_/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </h3>
                  <p className=&quot;text-sm text-gray-400&quot;>2030 Future Technology</p>
                </div>
              </div>
              
              <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
                Transforming businesses through innovative solutions and intelligent automation.
              </p>

<<<<<<< HEAD
              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>{contactInfo.address}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Globe className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={contactInfo.website} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.website.replace('https://', '')}
=======
              {_/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{_contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={_contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.website.replace('https://', _'')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Service Categories */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Rocket className=&quot;w-5 h-5 text-purple-400&quot; />
                <span>Our Services</span>
              </h4>
              <div className=&quot;grid grid-cols-1 gap-4&quot;>
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className=&quot;space-y-2&quot;>
                    <h5 className=&quot;text-sm font-medium text-purple-300&quot;>{category.title}</h5>
                    <div className=&quot;space-y-1&quot;>
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          className=&quot;block text-xs text-gray-400 hover:text-purple-300 transition-colors&quot;
                        >
                          {service.name}
                        </a>
=======
            {_/* Service Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Our Services</span>
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {_serviceCategories.slice(0, _3).map(_(category, _index) => (_<div key={index} className="space-y-2">
                    <h5 className="text-sm font-medium text-purple-300">{_category.title}</h5>
                    <div className="space-y-1">
                      {_category.services.map((service, _serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={_service.href}
                          className="block text-xs text-gray-400 hover:text-purple-300 transition-colors"
                        >
                          {_service.name}
                        </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Links */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Target className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Quick Links</span>
              </h4>
              <div className=&quot;space-y-2&quot;>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className=&quot;block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group&quot;
                  >
                    <ArrowRight className=&quot;w-3 h-3 group-hover:translate-x-1 transition-transform&quot; />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              <div className=&quot;space-y-2&quot;>
                <h5 className=&quot;text-sm font-medium text-cyan-300&quot;>Company</h5>
                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className=&quot;block text-xs text-gray-400 hover:text-cyan-300 transition-colors&quot;
                  >
                    {link.name}
                  </a>
=======
            {_/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <div className="space-y-2">
                {_quickLinks.map(_(link, _index) => (
                  <Link
                    key={index}
                    href={_link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{_link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-medium text-cyan-300">Company</h5>
                {_companyInfo.map(_(link, _index) => (
                  <Link
                    key={index}
                    href={_link.href}
                    className="block text-xs text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    {_link.name}
                  </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Social & Certifications */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Users className=&quot;w-5 h-5 text-green-400&quot; />
                <span>Connect & Trust</span>
              </h4>
              
              {/* Social Links */}
              <div className=&quot;space-y-3&quot;>
                <h5 className=&quot;text-sm font-medium text-green-300&quot;>Follow Us</h5>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;w-10 h-10 bg-gray-800/50 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/40&quot;
=======
            {_/* Social & Certifications */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Connect & Trust</span>
              </h4>
              
              {_/* Social Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300">Follow Us</h5>
                <div className="flex flex-wrap gap-2">
                  {_socialLinks.map(_(social, _index) => (
                    <a
                      key={index}
                      href={_social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/40"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <social.icon className=&quot;w-5 h-5&quot; />
                    </a>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Certifications */}
              <div className=&quot;space-y-3&quot;>
                <h5 className=&quot;text-sm font-medium text-green-300 flex items-center space-x-2&quot;>
                  <Award className=&quot;w-4 h-4&quot; />
                  <span>Certifications</span>
                </h5>
                <div className=&quot;grid grid-cols-1 gap-2&quot;>
                  {certifications.map((cert, index) => (
                    <div key={index} className=&quot;flex items-center space-x-2 text-xs text-gray-400&quot;>
                      <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                      <span>{cert}</span>
=======
              {_/* Certifications */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {_certifications.map(_(cert, _index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{_cert}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
<<<<<<< HEAD
=======
        {_/* Bottom Bar */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div className="border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy, 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
=======
        <div className=&quot;border-t border-purple-500/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
              <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href=&quot;/privacy&quot; className=&quot;hover:text-purple-400 transition-colors&quot;>Privacy Policy</a>
                <Link href=&quot;/terms&quot; className=&quot;hover:text-purple-400 transition-colors&quot;>Terms of Service</a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
              
              <div className=&quot;flex items-center space-x-4 text-sm text-gray-400&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Heart className=&quot;w-4 h-4 text-red-400&quot; />
                  <span>Made with passion for innovation</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                  <span>5.0/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
