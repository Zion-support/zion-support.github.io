import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="animated-bg text-white py-16 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold holographic">Zion Tech Group</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous
              systems. Transforming businesses with cutting-edge technology.
            </p>
            <div className="space-y-2 text-white/70">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 neon-glow">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 neon-glow">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Solutions</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Micro SAAS</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Quantum Computing</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Autonomous Systems</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Business Intelligence</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Cloud Migration</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blockchain Solutions</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">IoT & Edge Computing</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 neon-glow">Connect With Us</h4>
            <div className="space-y-4">
              <div className="space-y-3 text-white/70">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>
              
              <div className="pt-4">
                <h5 className="text-sm font-semibold mb-3 text-cyan-400">Follow Us</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/company/ziontechgroup" 
                    className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/ziontechgroup" 
                    className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/ziontechgroup" 
                    className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              &copy; 2024 Zion Tech Group. All rights reserved. | 
              <span className="text-cyan-400 ml-1">Transforming the future with AI</span>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-cyan-400 transition-colors text-sm hover:neon-glow">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-cyan-400 transition-colors text-sm hover:neon-glow">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
