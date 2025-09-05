<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom,
  Shield, Users, Briefcase, BookOpen, MessageCircle,
  Star, TrendingUp, Target, Layers, Cpu, Database,
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car,
  GraduationCap, Scale, Building, Factory, Camera,
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets,
  Code
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
import {_Phone, _Mail, _MapPin, _Globe, _Rocket, _Brain, _Atom, _Shield, _Users, _Briefcase, _BookOpen, _MessageCircle, _Star, _TrendingUp, _Target, _Layers, _Cpu, _Database, _Cloud, _Lock, _ShieldCheck, _Heart, _Leaf, _Car, _GraduationCap, _Scale, _Building, _Factory, _Camera, _Video, _Music, _Gamepad2, _Sun, _Moon, _Wind, _Droplets, _Code} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: '🚀 2028 Futuristic Innovations', _services: [
      { name: 'AI Climate Prediction Platform', _href: '/ai-climate-prediction-platform'},
      {_name: 'Quantum Cybersecurity Firewall', _href: '/quantum-cybersecurity-firewall'},
      {_name: 'Autonomous Drone Delivery Network', _href: '/autonomous-drone-delivery-network'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _services: [
      { name: 'Smart City Infrastructure Management', _href: '/smart-city-infrastructure-management'},
      {_name: 'IoT Energy Management System', _href: '/iot-energy-management-system'},
      {_name: 'Digital Twin Manufacturing Platform', _href: '/digital-twin-manufacturing-platform'},
      {_name: 'Autonomous Manufacturing AI', _href: '/autonomous-manufacturing-ai'}
    ]
  },
  {_title: '⚛️ Quantum & Advanced Tech', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform'},
      {_name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Internet Protocol', _href: '/quantum-internet-protocol'}
    ]
  },
  {_title: '🤖 AI & Machine Learning', _services: [
      { name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite'},
      {_name: 'AI Legal Research Platform', _href: '/ai-legal-research-platform'}
    ]
  }
],

<<<<<<< HEAD
const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: TrendingUp },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: ShieldCheck }
],

const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Cpu },
  { name: 'Developer Tools', href: '/dev-tools', icon: Database },
  { name: 'Mobile Apps', href: '/mobile', icon: Globe },
  { name: 'Cloud Services', href: '/cloud', icon: Cloud },
  { name: 'Security Center', href: '/security', icon: Shield }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Users },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageCircle },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code }
],

export default function UltraFuturisticFooter2028() {
  return (
    <footer className=&quot;bg-black/95 backdrop-blur-xl border-t border-purple-500/30&quot;>
      {/* Main Footer Content */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-1&quot;>
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center&quot;>
                  <Rocket className=&quot;w-6 h-6 text-white&quot; />
=======
const _companyLinks = [
  {_name: 'About Us', _href: '/about', _icon: Users},
  {_name: 'Case Studies', _href: '/case-studies', _icon: Briefcase},
  {_name: 'Blog & Resources', _href: '/blog', _icon: BookOpen},
  {_name: 'Careers', _href: '/careers', _icon: TrendingUp},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle},
  {_name: 'Support', _href: '/support', _icon: ShieldCheck}
];

const _resourceLinks = [
  {_name: 'Documentation', _href: '/docs', _icon: BookOpen},
  {_name: 'API Reference', _href: '/api', _icon: Cpu},
  {_name: 'Developer Tools', _href: '/dev-tools', _icon: Database},
  {_name: 'Mobile Apps', _href: '/mobile', _icon: Globe},
  {_name: 'Cloud Services', _href: '/cloud', _icon: Cloud},
  {_name: 'Security Center', _href: '/security', _icon: Shield}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Users},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: MessageCircle},
  {_name: 'YouTube', _href: 'https://youtube.com/@ziontechgroup', _icon: Video},
  {_name: 'GitHub', _href: 'https://github.com/ziontechgroup', _icon: Code}
];

export default function UltraFuturisticFooter2028() {_return (_<footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {_/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10&quot;></div>
              </div>
              <div>
                <h3 className=&quot;text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h3>
                <p className=&quot;text-sm text-purple-300&quot;>2028 Future Technology</p>
              </div>
            </div>
            
<<<<<<< HEAD
            <p className=&quot;text-purple-200 mb-6 leading-relaxed&quot;>
              Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
            </p>

            {/* Contact Information */}
            <div className=&quot;space-y-3&quot;>
              <div className=&quot;flex items-center space-x-3 text-purple-200&quot;>
                <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                <span className=&quot;text-sm&quot;>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center space-x-3 text-purple-200&quot;>
                <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center space-x-3 text-purple-200&quot;>
                <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
                <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
              </div>
              <div className=&quot;flex items-center space-x-3 text-purple-200&quot;>
                <Globe className=&quot;w-4 h-4 text-purple-400&quot; />
                <a href={contactInfo.website} className=&quot;text-sm hover:text-white transition-colors&quot;>
                  {contactInfo.website}
=======
            <p className="text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, _quantum computing, _and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
            </p>

            {_/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Globe className="w-4 h-4 text-purple-400" />
                <a href={_contactInfo.website} className="text-sm hover:text-white transition-colors">
                  {_contactInfo.website}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </div>
            </div>

<<<<<<< HEAD
            {/* Social Links */}
            <div className=&quot;flex space-x-4 mt-6&quot;>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40&quot;
=======
            {_/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {_socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <social.icon className=&quot;w-5 h-5&quot; />
                </a>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Service Categories */}
          <div className=&quot;lg:col-span-2&quot;>
            <h3 className=&quot;text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2&quot;>
              🚀 Our Services
            </h3>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {serviceCategories.map((category) => (
                <div key={category.title} className=&quot;space-y-3&quot;>
                  <h4 className=&quot;font-medium text-purple-300&quot;>{category.title}</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className=&quot;text-sm text-purple-200 hover:text-white transition-colors hover:underline&quot;
                        >
                          {service.name}
                        </a>
=======
          {_/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              🚀 Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {_serviceCategories.map(_(category) => (_<div key={category.title} className="space-y-3">
                  <h4 className="font-medium text-purple-300">{_category.title}</h4>
                  <ul className="space-y-2">
                    {_category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={_service.href}
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline"
                        >
                          {_service.name}
                        </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Quick Links */}
          <div className=&quot;lg:col-span-1&quot;>
            <h3 className=&quot;text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2&quot;>
              Quick Links
            </h3>
            
            {/* Company Links */}
            <div className=&quot;mb-6&quot;>
              <h4 className=&quot;font-medium text-purple-300 mb-3&quot;>Company</h4>
              <ul className=&quot;space-y-2&quot;>
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2&quot;
                    >
                      <link.icon className=&quot;w-4 h-4&quot; />
                      <span>{link.name}</span>
                    </a>
=======
          {_/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Quick Links
            </h3>
            
            {_/* Company Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>
              <ul className="space-y-2">
                {_companyLinks.map(_(link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{_link.name}</span>
                    </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Resource Links */}
            <div className=&quot;mb-6&quot;>
              <h4 className=&quot;font-medium text-purple-300 mb-3&quot;>Resources</h4>
              <ul className=&quot;space-y-2&quot;>
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2&quot;
                    >
                      <link.icon className=&quot;w-4 h-4&quot; />
                      <span>{link.name}</span>
                    </a>
=======
            {_/* Resource Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                {_resourceLinks.map(_(link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{_link.name}</span>
                    </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Newsletter Signup */}
            <div className=&quot;bg-purple-900/20 border border-purple-500/30 rounded-lg p-4&quot;>
              <h4 className=&quot;font-medium text-white mb-3&quot;>Stay Updated</h4>
              <p className=&quot;text-sm text-purple-200 mb-3&quot;>
=======
            {_/* Newsletter Signup */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-sm text-purple-200 mb-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Get the latest insights on future technology and AI innovations.
              </p>
              <div className=&quot;flex space-x-2&quot;>
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email&quot;
                  className=&quot;flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
                />
                <button className=&quot;px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
      <div className=&quot;border-t border-purple-500/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
            {/* Copyright */}
            <div className=&quot;text-sm text-purple-300&quot;>
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {/* Legal Links */}
            <div className=&quot;flex items-center space-x-6 text-sm&quot;>
              <Link href=&quot;/privacy&quot; className=&quot;text-purple-300 hover:text-white transition-colors&quot;>
=======
      {_/* Bottom Bar */}
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {_/* Copyright */}
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {_/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Privacy Policy
              </a>
              <Link href=&quot;/terms&quot; className=&quot;text-purple-300 hover:text-white transition-colors&quot;>
                Terms of Service
              </a>
              <Link href=&quot;/cookies&quot; className=&quot;text-purple-300 hover:text-white transition-colors&quot;>
                Cookie Policy
              </a>
              <Link href=&quot;/security&quot; className=&quot;text-purple-300 hover:text-white transition-colors&quot;>
                Security
              </a>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Floating Action Button */}
      <div className=&quot;fixed bottom-6 right-6 z-50&quot;>
=======
      {_/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Link
          href=&quot;/contact&quot;
          className=&quot;w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group&quot;
        >
          <MessageCircle className=&quot;w-8 h-8 group-hover:rotate-12 transition-transform duration-300&quot; />
        </a>
      </div>

<<<<<<< HEAD
      {/* Background Effects */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl&quot;></div>
=======
      {_/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </footer>
  )
}