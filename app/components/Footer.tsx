import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
<<<<<<< HEAD
  ArrowRightIcon,
  HeartIcon
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} from '@heroicons/react/24/outline';  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
  HeartIcon
} from '@heroicons/react/24/outline';
=======
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
  GlobeAltIcon
} from '@heroicons/react/24/outline';
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
=======
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
<<<<<<< HEAD
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
<<<<<<< HEAD
    { name: '5G Solutions', href: '/5g-solutions' }
=======
    { name: '5G Solutions', href: '/5g-solutions' },
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Demo', href: '/demo' },
    { name: 'Documentation', href: '/docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
<<<<<<< HEAD
    { name: 'Compliance', href: '/compliance' }
=======
    { name: 'Compliance', href: '/compliance' },
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }
=======
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'IT Solutions', href: '/it-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Micro SaaS', href: '/micro-saas-solutions' },
      { name: '5G Solutions', href: '/5g-solutions' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'Demo', href: '/demo' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: GlobeAltIcon },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: GlobeAltIcon },
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  ];
=======
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Digital Transformation', href: '/digital-transformation' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'FAQ', href: '/faq' }
    ]
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
=======
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
            <p className="text-gray-400 mb-6 max-w-md">
=======
            <p className="text-gray-400 mb-6 max-w-sm text-sm">
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {/* Contact Info */}            <div className="space-y-3 mb-6">
=======
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
=======
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPinIcon className="w-4 h-4" />
=======
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <PhoneIcon className="w-4 h-4 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <EnvelopeIcon className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPinIcon className="w-4 h-4 text-purple-400" />
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
                <span>Middletown, DE 19709</span>
              </div>
<<<<<<< HEAD
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Social Links */}            <div className="flex space-x-4">
=======
            {/* Social Links */}
            <div className="flex space-x-4">
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
<<<<<<< HEAD
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'github' && '🐙'}
                </a>
              ))}            <div className="flex space-x-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
=======
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions that transform businesses 
              through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
                <Facebook className="w-5 h-5" />
=======
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
<<<<<<< HEAD
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
<<<<<<< HEAD
                  <span className="sr-only">{social.name}</span>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                    {social.icon === 'linkedin' && <span className="text-xs">in</span>}
                    {social.icon === 'twitter' && <span className="text-xs">t</span>}
                    {social.icon === 'github' && <span className="text-xs">g</span>}
                  </div>
                </a>
              ))}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
            </div>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
<<<<<<< HEAD
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
                  <Link
<<<<<<< HEAD
                    to={service.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
=======
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
=======
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
<<<<<<< HEAD
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
                  <Link
<<<<<<< HEAD
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
=======
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
=======
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Resources */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
            <h3 className="text-white font-semibold text-lg mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
<<<<<<< HEAD
=======
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
<<<<<<< HEAD
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
=======
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key={item.name}>
=======
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
=======
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    {link.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">info@ziontechgroup.com</span>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPinIcon className="w-5 h-5 text-purple-400" />
              <span>Middletown, DE 19709</span>
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-purple-400" />
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-purple-400" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
=======
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">San Francisco, CA</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-400" />
            <span>by Zion Tech Group</span>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
=======
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Legal Links */}
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
<<<<<<< HEAD
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>for innovation</span>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
          <div className="flex space-x-6 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
=======
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
          </div>
=======
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved. Made with{' '}
            <HeartIcon className="w-4 h-4 inline text-red-500" /> for our clients.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
export default Footer;
=======
};

export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
};

export default Footer;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
