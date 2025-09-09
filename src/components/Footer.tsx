import { Link } from 'react-router-dom';
import '../styles/futuristic.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ZION
              </motion.span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting innovators, talent, and cutting-edge technology worldwide.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm">hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm">Global • Remote First</span>
              </div>
            </div>
          </motion.div>

            {/* Social media */}
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Twitter"
                title="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Instagram"
                title="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="GitHub"
                title="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </motion.a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Green IT</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">IT Onsite Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Sitemap</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Contact Support</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">Security</Link></li>
              <li><Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">System Status</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
              Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </motion.div>
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook,
  Instagram,
  Youtube,
  Globe,
  ArrowUp,
  Heart
} from 'lucide-react';

// Footer navigation structure
const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Digital Transformation', href: '/services/transformation' },
      { name: 'Infrastructure', href: '/services/infrastructure' },
      { name: 'Consulting', href: '/services/consulting' },
    ]
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Enterprise', href: '/enterprise' },
      { name: 'SMB', href: '/smb' },
      { name: 'Startup', href: '/startup' },
      { name: 'Government', href: '/government' },
      { name: 'Healthcare', href: '/healthcare' },
      { name: 'Finance', href: '/finance' },
    ]
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Press', href: '/press' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Partners', href: '/partners' },
    ]
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Training', href: '/training' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Events', href: '/events' },
    ]
  },
  support: {
    title: 'Support',
    items: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support Portal', href: '/support' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Status Page', href: '/status' },
      { name: 'Community', href: '/community' },
      { name: 'Feedback', href: '/feedback' },
    ]
  }
};

// Social media links
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-zion-slate-dark to-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerNavigation).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-zion-slate-light text-sm"
            >
              <span>© 2025 Zion Tech Group. All rights reserved.</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for innovation</span>
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-white/10`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-zion-slate-light/60">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-xs">Live</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookies</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
            </div>
            <motion.div 
              className="flex items-center space-x-2 text-zion-slate-light text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for the future of technology</span>
            </motion.div>
          </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-zion-cyan/20 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <span>View Pricing</span>
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with innovation by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-zion-cyan hover:bg-zion-cyan-light text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
