<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Award, Users, Shield, Zap, Brain, Cloud, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'AI Financial Analysis Pro', href: '/ai-financial-analysis-pro' },
        { label: 'AI HR Recruitment Pro', href: '/ai-hr-recruitment-pro' },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      links: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'IT Consulting', href: '/it-consulting' },
        { label: 'System Integration', href: '/system-integration' },
        { label: 'Network Security', href: '/network-security' }
      ]
    },
    {
      title: 'Solutions',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      links: [
        { label: 'Digital Transformation', href: '/digital-transformation' },
        { label: 'Business Intelligence', href: '/business-intelligence' },
        { label: 'Process Automation', href: '/process-automation' },
        { label: 'Data Analytics', href: '/data-analytics' },
        { label: 'Mobile Solutions', href: '/mobile-solutions' }
      ]
    }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' }
  ];

  const supportLinks = [
    { label: 'Help Center', href: '/help' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api-docs' },
    { label: 'Status Page', href: '/status' },
    { label: 'Contact Support', href: '/support' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR Compliance', href: '/gdpr' },
    { label: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of AI and IT solutions, helping businesses transform and scale with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Get the latest news and updates from Zion Tech Group.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { ;
CpuChipIcon,;
EnvelopeIcon,;
PhoneIcon,;
MapPinIcon,;
ArrowRightIcon,;
HeartIcon
} from '@heroicons/react/24/outline':;
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react':
;
const Footer: React.FC = () =>{;
import React from "react":;
import { Link } from "react-router-dom":;
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react":
;
const Footer = () =>{;
const currentYear = new Date().getFullYear();
  ;
const services = [
  ];
;
const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];
;
const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Documentation', href: '/api-docs' }
  ];
;
const legal = [
    ]
  }
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: GlobeAltIcon },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: GlobeAltIcon },
  ];
  const footerLinks = {;
services: [
      { name: "AI Solutions", href: "/ai-solutions" },
      { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Digital Transformation", href: "/digital-transformation" }
    ],;
company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],;
resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faq" }
    ]
  }
  return (
    <footer className="bg-gray-900 text-white"><div className="max-w-7xl mx-auto px-4 py-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{ /* Company Info */ }
          <div className="lg:col-span-2"><Link to="/" className="flex items-center space-x-3 mb-6 group"><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"><span className="text-white font-bold text-xl">Z</span><div className="lg:col-span-1"><div className="flex items-center space-x-2 mb-4"><div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-lg">Z</span><footer className="bg-slate-900 border-t border-slate-700/50">{ name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ];
;
return (
    <footer className="bg-gray-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">{ /* Company Info */ }
          <div className="lg:col-span-2"><div className="flex items-center mb-4"><CpuChipIcon className="h-8 w-8 text-blue-500 mr-2" /><span className="text-xl font-bold">Zion Tech Group</span></div><span>+1-302-464-0950</span></div><div className="flex items-center space-x-3 text-gray-400">"
                <EnvelopeIcon className="w-4 h-4" />"
                <span>kleber@ziontechgroup.com</span></div><div className="flex items-center space-x-3 text-gray-400">"
                <MapPinIcon className="w-4 h-4" />"
                <span>Middletown, DE 19709</span></div></div>{/* Social Links */}            <div className="flex space-x-4">"
              {socialLinks.map((social) =>(
                <a:;
key={social.name}
                  href={ social.href }
                  target="_blank":;
rel="noopener noreferrer":;
className="text-gray-400 hover:text-white transition-colors";
aria-label={ social.name }>{ social.icon === 'facebook' && '📘' }
                  { social.icon === 'twitter' && '🐦' }
                  { social.icon === 'linkedin' && '💼' }
                  { social.icon === 'github' && '🐙' }
                </a>))}            <div className="flex space-x-4">"
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
          <div className="lg:col-span-1">"
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">":;
Leading provider of AI and IT solutions that transform businesses ;
through innovative technology.
            </p><div className="flex space-x-4"><a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" />{ /* Social Links */ }
            <div className="flex space-x-4"><a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /><p className="text-gray-300 mb-6 max-w-md">Leading provider of AI and IT solutions, empowering businesses to transform ;
through cutting-edge technology and innovative approaches.
            </p><div className="flex space-x-4"><a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a><a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a><a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a><a href="#" className="text-gray-400 hover:text-white transition-colors"></div></a>))
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
                <Github className="w-5 h-5" />"
              </a></div></div>{ /* Services */ }
                <Github className="h-5 w-5" /></a></div></div>{/* Services */}
          <div><h3 className="text-lg font-semibold mb-4">Services</h3><ul className="space-y-2">{services.map((service) =>(
                <li key={service.name}><Link>{ link.name }
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{service.name}
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SAAS", href: "/micro-saas" }
  ];
;
return (
    <footer className="bg-gray-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3><p className="text-gray-400">Leading provider of AI-powered IT solutions and digital transformation services.
            </p></div><div><h4 className="text-md font-semibold mb-4">Services</h4><ul className="space-y-2">{services.map((service) =>(
                <li key={service.name}><Link to={service.href} className="text-gray-400 hover:text-white">{service.name};
                  </Link></li>))};
            </ul></div><div>>{ link.name }
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{item.name}
                  </Link></li>))
            </ul><h4 className="text-md font-semibold mb-4">Contact</h4><div className="space-y-2"><div className="flex items-center"><Mail className="h-4 w-4 mr-2"/><span className="text-gray-400">contact@ziontechgroup.com</span></div><div className="flex items-center"><Phone className="h-4 w-4 mr-2"/><span className="text-gray-400">+1 (555) 123-4567</span></div><div className="flex items-center"><MapPin className="h-4 w-4 mr-2"/><span className="text-gray-400">New York, NY</span></div><p className="text-gray-400 text-sm">© {currentYear} Zion Tech Group. All rights reserved.
              </p></div></div><div>{support.map((item) =>(
                <li key={item.name}>{ /* Resources */ }
          <div><h4 className="text-lg font-semibold mb-4">Resources</h4>"
            <ul className="space-y-2">"
              {footerLinks.resources.map((link, index) =>(
                <li key={index}><Link ;
to={ link.href }
                    className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />"
                  <Link:;
to={ item.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors">{ item.name }
                  </Link></li>))
              {legal.map((item) =>(
                <li key={item.name}><Link:;
to={ item.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors">{ item.name }
                    <ArrowRightIcon className="w-4 h-4 mr-2" />{ link.name }
            <h3 className="text-white font-semibold mb-4">Resources</h3><ul className="space-y-2">{footerLinks.resources.map((link) =>(
                <li key={link.name}><Link:;
to={ link.href }
                    className="text-gray-400 hover:text-purple-400 transition-colors">{ link.name }
                  <Link ;
to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{resource.name}
                  </Link></li>))
            </ul></div></div>Get the latest insights on AI and IT trends delivered to your inbox.
            </p><div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">"
              <input:;
type="email"":;
placeholder="Enter your email"":;
className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
              /><button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold">":;
Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />"
              </button>{ /* Contact Info */ }

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="flex items-center"><EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3" /><div><p className="text-sm text-gray-400">Email</p><p className="text-white">contact@ziontechgroup.com</p></div></div><div className="flex items-center"><PhoneIcon className="h-5 w-5 text-blue-500 mr-3" /><div><p className="text-sm text-gray-400">Phone</p><p className="text-white">+1 (555) 123-4567</p></div></div><span>+1-302-464-0950</span></div><div className="flex items-center space-x-2">"
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />"
              <span>kleber@ziontechgroup.com</span></div><div className="flex items-center space-x-2">"
              <MapPinIcon className="w-4 h-4 text-purple-400" />"
              <span>364 E Main St STE 1008, Middletown, DE 19709</span><div className="flex items-center"><MapPinIcon className="h-5 w-5 text-blue-500 mr-3" /><div><p className="text-sm text-gray-400">Location</p><p className="text-white">San Francisco, CA</p></div></div></div></div><span>Made with</span><HeartIcon className="w-4 h-4 text-red-400" />"
            <span>by Zion Tech Group</span></div>{ /* Copyright */ }
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"><p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>{ /* Bottom Section */ }
        <div className="mt-12 pt-8 border-t border-slate-700/50"><div className="flex flex-col md:flex-row justify-between items-center"><div className="text-gray-400 text-sm">© {currentYear} Zion Tech Group. All rights reserved.
            </div>{ /* Legal Links */ }
            <div className="flex space-x-6 mt-4 md:mt-0">{footerLinks.legal.map((link) =>(
                <Link:;
key={link.name}
                  to={ link.href }
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors">{ link.name }
                </Link>))
            </div><div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">"
          <p className="text-gray-400 text-sm">"
            © {currentYear} Zion Tech Group. All rights reserved.
          </p><div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">"
            <span>Made with</span><HeartIcon className="w-4 h-4 text-red-500" />"
            <span>for innovation</span><div className="flex space-x-6 text-gray-400 text-sm">"
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>"
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>"
          </div>{ /* Copyright */ }
        <div className="border-t border-gray-800 mt-8 pt-8 text-center"><p className="text-gray-400">© {currentYear} Zion Tech Group. All rights reserved. Made with{ ' ' }
            <HeartIcon className="w-4 h-4 inline text-red-500" />for our clients.

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"><div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"><span>© {currentYear} Zion Tech Group. All rights reserved.</span></div><div className="flex items-center space-x-6">{legal.map((item) =>(
              <Link ;
key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm">{item.name}
              </Link>))}
          </div><h4 className="text-md font-semibold mb-4">Follow Us</h4><div className="flex space-x-4"><a href="#" className="text-gray-400 hover:text-white"><Github className="h-5 w-5"/></a><a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5"/></a><a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5"/></a></div></div></div><div className="border-t border-gray-800 mt-8 pt-8 text-center"><p className="text-gray-400">© {currentYear} Zion Tech Group. All rights reserved.
          </p></div></div></footer>);
};
;
export default Footer:
}}}}}}
))))
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
