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
        { name: 'IoT Solutions', href: '/services/iot' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Status Page', href: '/status' },
        { name: 'Support Ticket', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">AI & Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the future of technology innovation with cutting-edge AI solutions, 
              expert talent, and comprehensive digital transformation services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-purple/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-zion-slate-light text-sm mb-4">
              Get the latest insights on AI, technology trends, and industry updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-4 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-4 w-4 text-red-500 hidden sm:inline" />
              <span className="hidden sm:inline">for innovation</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
