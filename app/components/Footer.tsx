'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI and IT solutions for modern businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-400">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 text-sm">AI Chatbots</Link></li>
              <li><Link to="/ai-content-generation" className="text-gray-300 hover:text-cyan-400 text-sm">Content Generation</Link></li>
              <li><Link to="/ai-data-analytics" className="text-gray-300 hover:text-cyan-400 text-sm">Data Analytics</Link></li>
              <li><Link to="/ai-computer-vision" className="text-gray-300 hover:text-cyan-400 text-sm">Computer Vision</Link></li>
              <li><Link to="/ai-voice-solutions" className="text-gray-300 hover:text-cyan-400 text-sm">Voice Solutions</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 text-sm">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 text-sm">Cybersecurity</Link></li>
              <li><Link to="/software-development" className="text-gray-300 hover:text-cyan-400 text-sm">Software Development</Link></li>
              <li><Link to="/data-management" className="text-gray-300 hover:text-cyan-400 text-sm">Data Management</Link></li>
              <li><Link to="/it-consulting" className="text-gray-300 hover:text-cyan-400 text-sm">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 text-sm">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
