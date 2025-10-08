import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Sparkles, Zap, Brain, Cloud, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black px-3 py-1 rounded-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and innovative micro SAAS tools that transform businesses worldwide.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Zap className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Brain className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Shield className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Cloud className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Sparkles className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Zap className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Our Solutions</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">AI & Machine Learning</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Quantum Computing</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Autonomous Systems</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Blockchain & Web3</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Business Intelligence</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Cloud Migration</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">Cybersecurity</span>
              </li>
              <li className="flex items-center group">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-cyan-400 transition-colors">IoT & Edge Computing</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Connect With Us</h4>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/20">
                <h5 className="text-cyan-400 font-semibold mb-3">Get Started Today</h5>
                <p className="text-gray-300 text-sm mb-4">
                  Ready to transform your business with cutting-edge AI solutions?
                </p>
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
              
              <div className="space-y-3">
                <h5 className="text-cyan-400 font-semibold">Follow Us</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/company/ziontechgroup" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/ziontechgroup" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/ziontechgroup" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
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

        <div className="border-t border-cyan-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 mb-2">&copy; 2024 Zion Tech Group. All rights reserved.</p>
              <p className="text-gray-400 text-sm">
                Transforming businesses with cutting-edge AI and technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
