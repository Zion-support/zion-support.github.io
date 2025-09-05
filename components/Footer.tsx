import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ArrowRight,
  Shield
} from 'lucide-react';

const companyInfo = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology.',
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'AI Services', href: '/ai-services' },
      { label: 'IT Services', href: '/it-services' },
      { label: 'Micro SaaS', href: '/micro-saas' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Quantum Computing', href: '/services/quantum-computing' },
      { label: 'Blockchain Solutions', href: '/services/blockchain' },
      { label: 'IoT & Smart Cities', href: '/services/iot-smart-cities' },
      { label: 'Edge Computing', href: '/services/edge-computing' },
      { label: 'Digital Twins', href: '/services/digital-twins' },
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'All Solutions', href: '/solutions' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Healthcare', href: '/solutions/healthcare' },
      { label: 'Finance', href: '/solutions/finance' },
      { label: 'Retail', href: '/solutions/retail' },
      { label: 'Education', href: '/solutions/education' },
      { label: 'Government', href: '/solutions/government' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'White Papers', href: '/white-papers' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/docs' },
    ]
  }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Sitemap', href: '/sitemap' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest technology insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-64"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}