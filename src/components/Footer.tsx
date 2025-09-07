import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronUp, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services. Empowering businesses 
              with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} className="text-cyan-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} className="text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin size={18} className="text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Solutions</Link></li>
              <li><Link to="/services/cloud" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cloud Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/services/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Micro SaaS</Link></li>
              <li><Link to="/services/consulting" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group"
              aria-label="Back to top"
            >
              <ChevronUp className="h-5 w-5 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved. | Built with ❤️ for innovation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;