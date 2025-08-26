import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Globe
} from 'lucide-react';

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
            {/* Social media */}
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Twitter"
                title="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
                aria-label="Instagram"
                title="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI Solutions</Link></li>
              <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cloud & DevOps</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Blog</Link></li>
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">White Papers</Link></li>
              <li><Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Help Center</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/tutorials" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Tutorials</Link></li>
              <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Webinars</Link></li>
            </ul>
          </div>
        </div>

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
          </div>
          
          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-zion-slate-light text-sm"
          >
            <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-200">
              Sitemap
            </Link>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zion-cyan transition-colors duration-200 flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>Main Website</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-110 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
