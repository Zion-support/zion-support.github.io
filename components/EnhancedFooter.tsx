<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react',

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear(),
=======
import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {_const _currentYear = new Date().getFullYear();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _footerSections = [
    {
      title: 'Services', _links: [
        { name: 'AI Business Intelligence', _href: '/ai-business-intelligence'},
        {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity'},
        {_name: 'Edge Computing', _href: '/edge-computing-orchestration'},
        {_name: 'Space Technology', _href: '/space-technology'},
        {_name: 'View All Services', _href: '/comprehensive-2025-services-showcase'}
      ]
    },
    {_title: 'Company', _links: [
        { name: 'About Us', _href: '/about'},
        {_name: 'Our Work', _href: '/portfolio'},
        {_name: 'Blog & Insights', _href: '/blog'},
        {_name: 'Careers', _href: '/careers'},
        {_name: 'Contact', _href: '/contact'}
      ]
    },
    {_title: 'Resources', _links: [
        { name: 'Documentation', _href: '/docs'},
        {_name: 'API Reference', _href: '/api'},
        {_name: 'Support Center', _href: '/support'},
        {_name: 'Privacy Policy', _href: '/privacy'},
        {_name: 'Terms of Service', _href: '/terms'}
      ]
    }
  ],

<<<<<<< HEAD
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
  ],

  return (
    <footer className=&quot;bg-slate-950 border-t border-white/10&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 py-16&quot;>
        {/* Main Footer Content */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2&quot;>
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center&quot;>
                <Brain className=&quot;w-6 h-6 text-white&quot; />
=======
  const _socialLinks = [
    {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Github},
    {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin},
    {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter}
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {_/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {_/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </div>
            <p className=&quot;text-white/70 mb-6 max-w-md&quot;>
              Leading-edge technology solutions and autonomous innovation platform. 
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation.
            </p>
            
<<<<<<< HEAD
            {/* Contact Info */}
            <div className=&quot;space-y-3&quot;>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;hover:text-white transition-colors&quot;>
=======
            {_/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <a href=&quot;tel:+13024640950&quot; className=&quot;hover:text-white transition-colors&quot;>
                  +1 (302) 464-0950
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <MapPin className=&quot;w-4 h-4&quot; />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className=&quot;text-white font-semibold mb-4&quot;>{section.title}</h3>
              <ul className=&quot;space-y-2&quot;>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-white/70 hover:text-white transition-colors duration-200&quot;
                    >
                      {link.name}
                    </a>
=======
          {_/* Footer Sections */}
          {_footerSections.map(_(section) => (_<div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{_section.title}</h3>
              <ul className="space-y-2">
                {_section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {_link.name}
                    </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom Section */}
        <div className=&quot;pt-8 border-t border-white/10&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&quot;>
            {/* Copyright */}
            <div className=&quot;text-white/60 text-sm&quot;>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className=&quot;flex items-center space-x-4&quot;>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200&quot;
                  aria-label={social.name}
=======
        {_/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {_/* Copyright */}
            <div className="text-white/60 text-sm">
              © {_currentYear} Zion Tech Group. All rights reserved.
            </div>

            {_/* Social Links */}
            <div className="flex items-center space-x-4">
              {_socialLinks.map(_(social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  aria-label={_social.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <social.icon className=&quot;w-5 h-5&quot; />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
},

export default EnhancedFooter,
