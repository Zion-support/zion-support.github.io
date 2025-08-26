import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Infrastructure', href: '/services/infrastructure' },
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Quantum AI', href: '/services/quantum-ai' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Training', href: '/training' },
        { name: 'Webinars', href: '/webinars' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/support' },
        { name: 'Status', href: '/status' },
        { name: 'Contact Support', href: '/contact' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: LinkedIn },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' },
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Solutions</p>
              </div>
            </Link>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
              We help businesses transform and scale through cutting-edge technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <contact.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
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
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-zion-slate-light mb-4 text-sm">
              Get the latest insights on AI, technology trends, and industry updates.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg hover:bg-zion-cyan-light transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-zion-cyan text-zion-blue-dark rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
