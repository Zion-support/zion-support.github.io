import React from 'react';'
import { Link } from 'react-router-dom';'
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,;
  ArrowRightIcon,;
  HeartIcon;
} from '@heroicons/react/24/outline';  ArrowRightIcon'
} from '@heroicons/react/24/outline';'
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';'
  HeartIcon
} from '@heroicons/react/24/outline';'
  GlobeAltIcon
} from '@heroicons/react/24/outline';'
} from '@heroicons/react/24/outline';'
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';'
const Footer: "React.FC = () => {"
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "'AI Solutions'", href: "'/ai-solutions'"},'
    { name: "'IT Solutions'", href: "'/it-solutions'"},'
    { name: "'Micro SaaS Solutions'", href: "'/micro-saas-solutions'"},'
    { name: "'Cybersecurity'", href: "'/cybersecurity'"},'
    { name: "'Cloud Infrastructure'", href: "'/cloud-solutions'"},';
    { name: "'Digital Transformation'", href: "'/digital-transformation'"},';
    { name: "'5G Solutions'", href: "'/5g-solutions'"}';
  ];

  const company = [
    { name: "'About Us'", href: "'/about'"},'
    { name: "'Solutions'", href: "'/solutions'"},'
    { name: "'Pricing'", href: "'/pricing'"},'
    { name: "'Blog'", href: "'/blog'"},';
    { name: "'Careers'", href: "'/careers'"},';
    { name: "'Case Studies'", href: "'/case-studies'"}';
  ];

  const support = [
    { name: "'Contact'", href: "'/contact'"},'
    { name: "'Support'", href: "'/support'"},'
    { name: "'Tutorials'", href: "'/tutorials'"},';
    { name: "'Demo'", href: "'/demo'"},';
    { name: "'Documentation'", href: "'/docs'"}';
  ];

  const legal = [
    { name: "'Privacy Policy'", href: "'/privacy'"},'
    { name: "'Terms of Service'", href: "'/terms'"},'
    { name: "'Cookie Policy'", href: "'/cookies'"},'
    { name: "'GDPR'", href: "'/gdpr'"},';
    { name: "'Security'", href: "'/security'"},';
    { name: "'Compliance'", href: "'/compliance'"}';
  ];

  const socialLinks = [
    { name: "'LinkedIn'", href: "'http,s://linkedin.com/company/ziontechgroup'", icon: "'linkedin'"},';
    { name: "'Twitter'", href: "'http,s://twitter.com/ziontechgroup'", icon: "'twitter'"},';
    { name: "'GitHub'", href: "'http,s://github.com/ziontechgroup'", icon: "'github'"}';
  ];
  const footerLinks = {
    services: [
      { name: "'AI Solutions'", href: "'/ai-solutions'"},'
      { name: "'Cloud Infrastructure'", href: "'/cloud-infrastructure'"},'
      { name: "'Cybersecurity'", href: "'/cybersecurity'"},'
      { name: "'Digital Transformation'", href: "'/digital-transformation'"}'
    ],
    company: [
      { name: "'About Us'", href: "'/about'"},'
      { name: "'Our Team'", href: "'/team'"},'
      { name: "'Careers'", href: "'/careers'"},'
      { name: "'Contact'", href: "'/contact'"}'
    ],
    resources: [
      { name: "'Blog'", href: "'/blog'"},'
      { name: "'Documentation'", href: "'/docs'"},'
      { name: "'Support'", href: "'/support'"},';
      { name: "'FAQ'", href: "'/faq'"}';
    ];
  };

  return (
    <footer className="bg-gray-90o0 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 l,g:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to=""/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-60o0 to-cyan-60o0 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
    <footer className="bg-slate-90o0 border-t border-slate-70o0"/50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,g:px-8 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 l,g:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-40o0 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-30o0">
                <PhoneIcon className="w-5 h-5 text-purple-40o0" />
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-40o0">
                <PhoneIcon className="w-4 h-4" />
                <span>+1-30o2-464-0o950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-40o0">
                <EnvelopeIcon className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-40o0">
                <MapPinIcon className="w-4 h-4" />
                <span>Middletown, DE 1970o9</span>
              </div>
            </div>

            {/* Social Links */}            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank""
                  rel="noopener noreferrer""
                  className="text-gray-40o0 hover:text-white transition-colors"
                  aria-label="{social.name}"
                >
                  {social.icon === 'facebook' && '📘'}'
                  {social.icon === 'twitter' && '🐦'}'
                  {social.icon === 'linkedin' && '💼'}'
                  {social.icon === 'github' && '🐙'}'
                </a>
              ))}            <div className="flex space-x-4">
              <a href="https: "/"/facebook.com"/ziontechgroup" className="text-gray-40o0 hove,r:text-white transition-colors">
                <Facebook className="w-5 h-5" />
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https: /"/linkedin.com"/company"/ziontechgroup" className="text-gray-40o0 hove,r:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-40o0 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-40o0 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-40o0 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-60o0 rounded flex items-center justify-center">
                    {social.icon === 'linkedin' && <span className="text-xs">in</span>}'"
                    {social.icon === 'twitter' && <span className="text-xs">t</span>}'"
                    {social.icon === 'github' && <span className="text-xs">g</span>}'"
                  </div>
                </a>
              ))}
              <a href="https: "/"/github.com"/ziontechgroup" className="text-gray-40o0 hove,r:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key="{service.name}">
                  <Link 
                    to={service.href} 
                    className="text-gray-40o0 hover:text-white transition-colors flex items-center group"
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key="{link.name}">
                  <Link
                    to={service.href}
                    className="text-gray-30o0 hover:text-white text-sm transition-colors"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    to={link.href}
                    className="text-gray-40o0 hover:text-purple-40o0 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key="{item.name}">
                  <Link 
                    to={item.href} 
                    className="text-gray-40o0 hover:text-white transition-colors flex items-center group"
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key="{link.name}">
                  <Link
                    to={item.href}
                    className="text-gray-30o0 hover:text-white text-sm transition-colors"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    to={link.href}
                    className="text-gray-40o0 hover:text-purple-40o0 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key="{resource.name}">
            <h3 className="text-white font-semibold text-lg mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key="{item.name}">
                  <Link 
                    to={link.href} 
                    className="text-gray-30o0 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key="{item.name}">
                  <Link
                    to={item.href}
                    className="text-gray-30o0 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    {link.name}
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key="{link.name}">
                  <Link
                    to={link.href}
                    className="text-gray-40o0 hover:text-purple-40o0 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-70o0"/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-30o0 mb-6 text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-80o0 border border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-purple-50o0 focu,s:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-60o0 to-cyan-60o0 text-white rounded-lg hover: from-purple-70o0 hove,r:to-cyan-70o0 transition-all duration-30o0 flex items-center justify-center font-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
        {/* Contact Info */}
        <div className="border-t border-gray-80o0 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-40o0" />
              <span className="text-gray-30o0">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-40o0" />
              <span className="text-gray-30o0">info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-40o0">
              <MapPinIcon className="w-5 h-5 text-purple-40o0" />
              <span>Middletown, DE 1970o9</span>
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-70o0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-30o0">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-purple-40o0" />
              <span>+1-30o2-464-0o950</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4 text-purple-40o0" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-purple-40o0" />
              <span>364 E Main St STE 10o08, Middletown, DE 1970o9</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-70o0"/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-40o0 mb-4 md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-40o0" />
            <span>by Zion Tech Group</span>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-40o0 text-sm">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-40o0 hover:text-purple-40o0 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
        <div className="mt-8 pt-8 border-t border-slate-70o0 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-40o0 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-40o0 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-50o0" />
            <span>for innovation</span>
          <div className="flex space-x-6 text-gray-40o0 text-sm">
            <Link to=""/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to=""/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        {/* Copyright */}
        <div className="border-t border-gray-80o0 mt-8 pt-8 text-center">
          <p className="text-gray-40o0">
            © {currentYear} Zion Tech Group. All rights reserved. Made with{' '}'
            <HeartIcon className="w-4 h-4 inline text-red-50o0" /> for our clients."
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
