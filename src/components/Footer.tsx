import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNewsletter } from './FooterNewsletter';
import { Logo } from './header/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Press & Media', path: '/press' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', path: '/services/ai' },
        { name: 'Cloud', path: '/services/cloud' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Infrastructure', path: '/services/infrastructure' },
        { name: 'Consulting', path: '/services/consulting' },
      ]
    },
    {
      title: 'Talent',
      links: [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent' },
        { name: 'AI Matcher', path: '/match' },
        { name: 'Hire Now', path: '/contact' },
        { name: 'Post a Job', path: '/post-job' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Help Center', path: '/help' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR Compliance', path: '/gdpr' },
        { name: 'Accessibility', path: '/accessibility' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              Zion Tech Group is a leading technology company providing innovative IT solutions, AI services, and connecting top tech talent with forward-thinking organizations.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light text-sm">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light rounded-lg flex items-center justify-center text-zion-slate-light hover:bg-zion-cyan hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mb-12 pt-8 border-t border-zion-blue-light">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-zion-slate-light text-sm mb-6">
              Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
              <Link to="/support" className="hover:text-zion-cyan transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
