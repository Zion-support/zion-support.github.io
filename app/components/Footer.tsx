'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Twitter, Linkedin, Github, Settings } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = memo(({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</Link></li>
              <li><Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Automation</Link></li>
              <li><Link to="/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Analytics</Link></li>
              <li><Link to="/ai-customer-support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Customer Support</Link></li>
              <li><Link to="/ai-data-visualization" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Data Visualization</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Solutions</Link></li>
              <li><Link to="/cloud-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Services</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/it-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Infrastructure</Link></li>
              <li><Link to="/it-consulting" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+1-302-464-0950" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  +1-302-464-0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
