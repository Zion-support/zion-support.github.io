import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-slate-300 text-sm">
              Leading the future of technology with innovative solutions and cutting-edge services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-300">AI Solutions</span></li>
              <li><span className="text-slate-300">Cloud Computing</span></li>
              <li><span className="text-slate-300">Cybersecurity</span></li>
              <li><span className="text-slate-300">Data Analytics</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-slate-300 text-sm">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-slate-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;