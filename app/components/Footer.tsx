'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Services Overview</Link></li>
              <li><Link to="/ai-marketing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Marketing</Link></li>
              <li><Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Automation</Link></li>
              <li><Link to="/ai-healthcare" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Healthcare</Link></li>
              <li><Link to="/ai-fintech" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Fintech</Link></li>
              <li><Link to="/ai-customer-support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Customer Support</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services Overview</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/it-support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Support</Link></li>
              <li><Link to="/devops" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">DevOps & CI/CD</Link></li>
              <li><Link to="/database" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Database Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;