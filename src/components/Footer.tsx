import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Solutions', href: '/services/iot' },
        { name: 'Quantum Computing', href: '/services/quantum' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'News', href: '/news' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-700' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-blue to-zion-purple"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>Global Headquarters</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-slate pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500" /> for innovation.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-zion-slate rounded-lg flex items-center justify-center text-zion-slate-light transition-all duration-200 ${social.color} hover:bg-zion-slate-light hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
