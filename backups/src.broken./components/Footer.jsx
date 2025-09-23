import React from 'react';
import { FooterNewsletter } from "./FooterNewsletter.jsx";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <FooterNewsletter />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-zion-slate-light">
              <li><Link to="/about" className="hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/marketplace" className="hover:text-zion-cyan transition-colors">Marketplace</Link></li>
              <li><Link to="/blog" className="hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-zion-cyan transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-zion-slate-light">
              <li><Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-zion-cyan transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3 text-zion-slate-light">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 (302) 464-0950</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/zion-marketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/zionmarketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="border-t border-zion-blue-light/30 pt-8 mt-8 text-center text-zion-slate-light text-sm">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 inline-flex items-center text-zion-cyan hover:text-white transition-colors group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
