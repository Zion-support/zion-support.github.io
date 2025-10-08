import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import '../styles/futuristic.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 mr-2 text-neon-blue" />
              <h3 className="text-2xl font-bold neon-text">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous
              systems. Transforming businesses with cutting-edge technology.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-neon-green" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-neon-blue" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-neon-purple" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-blue">Micro SAAS Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  All Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AI Code Review Assistant
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Document Intelligence
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  API Testing Suite
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Customer Support Bot
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-purple">Professional Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  All Professional Services
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/quantum-computing" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/autonomous-systems" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Autonomous Systems
                </Link>
              </li>
              <li>
                <Link to="/blockchain-web3" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Blockchain & Web3
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-green">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white hover:neon-text transition-all flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-dark-border pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold neon-text-green mb-2">500+</div>
              <div className="text-gray-300 text-sm">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text-blue mb-2">1,200+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text-purple mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text-pink mb-2">99.5%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-dark-border pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold neon-text mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your free consultation and custom proposal today. Join 500+ companies already using our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="neon-button px-8 py-3 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="glass-card px-8 py-3 text-white border border-white/20 hover:border-neon-blue transition-all inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-white transition-colors ml-1">Privacy</a> | 
              <a href="/terms" className="hover:text-white transition-colors ml-1">Terms</a>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/zion-tech-group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-purple transition-colors flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;