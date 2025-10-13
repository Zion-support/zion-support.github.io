import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900/90 via-purple-900/50 to-slate-900/90 backdrop-blur-sm border-t border-cyan-500/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for Modern Businesses. Transforming industries with cutting-edge technology and innovative micro SAAS solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></span>
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                AI Analytics
              </Link></li>
              <li><Link to="/ai-content-generation" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                AI Content Generation
              </Link></li>
              <li><Link to="/ai-cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                AI Cybersecurity
              </Link></li>
              <li><Link to="/micro-saas-services" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Micro SAAS Solutions
              </Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                5G Solutions
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></span>
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                About Us
              </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Contact
              </Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Blog
              </Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Privacy Policy
              </Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Terms of Service
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 302 464 0950</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved. | Advanced AI and IT Solutions
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;