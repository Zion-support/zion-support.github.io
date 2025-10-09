'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white cyber-grid-enhanced">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold neon-flicker-enhanced">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Advanced AI and IT solutions for modern businesses. We help you transform your operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 cyber-glow-enhanced">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                AI Services
              </Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                IT Services
              </Link></li>
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Micro SAAS
              </Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Cloud Infrastructure
              </Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Cybersecurity
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 cyber-glow-enhanced">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                About Us
              </Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Our Team
              </Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Careers
              </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 cyber-glow-enhanced">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:cyber-glow-enhanced">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 hover:cyber-glow-enhanced">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 hover:cyber-glow-enhanced">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 hover:cyber-glow-enhanced">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;