import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const services = [
  { name: 'AI Services', href: '/ai-services' },
  { name: 'Web Development', href: '/web-development' },
  { name: 'Mobile Apps', href: '/mobile-apps' },
  { name: 'Cloud Solutions', href: '/cloud-solutions' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, web development, and digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
=======
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

const Footer = () => {
  const footerSections = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Cybersecurity', href: '/security' },
      { name: 'Data Analytics', href: '/data-analytics' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { name: 'Startup Solutions', href: '/startup-solutions' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
      { name: 'AI Implementation', href: '/solutions/ai-implementation' },
      { name: 'Custom Development', href: '/custom-development' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cloud computing, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
            </div>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
=======
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
=======
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerSections.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
=======
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                {footerSections.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
=======
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="mr-2">Trusted by</span>
              <span className="font-semibold text-white">500+</span>
              <span className="ml-2">companies worldwide</span>
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
