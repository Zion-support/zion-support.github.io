import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users, Globe } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'Custom Development', href: '/services/custom-development' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Startups', href: '/solutions/startups' },
        { name: 'Small Business', href: '/solutions/small-business' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { name: 'Custom Development', href: '/solutions/custom-development' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/help' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Zion Tech Group
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest technology insights and company updates delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;