import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide. We deliver innovative 
              technology solutions that drive real business value and competitive advantage.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Wilmington, DE, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-analytics-dashboard-pro" className="text-gray-400 hover:text-purple-400 transition-colors">AI Analytics Dashboard</Link></li>
              <li><Link to="/ai-voice-assistant-enterprise" className="text-gray-400 hover:text-purple-400 transition-colors">AI Voice Assistant</Link></li>
              <li><Link to="/ai-cybersecurity-platform" className="text-gray-400 hover:text-purple-400 transition-colors">AI Cybersecurity</Link></li>
              <li><Link to="/ai-accounting-assistant" className="text-gray-400 hover:text-purple-400 transition-colors">AI Accounting</Link></li>
              <li><Link to="/5g-implementation" className="text-gray-400 hover:text-purple-400 transition-colors">5G Implementation</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-purple-400 transition-colors">IT Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">All Services</Link></li>
              <li><a href="tel:+13024640950" className="text-gray-400 hover:text-purple-400 transition-colors">Call Now</a></li>
              <li><a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-purple-400 transition-colors">Email Us</a></li>
              <li><a href="https://ziontechgroup.com" className="text-gray-400 hover:text-purple-400 transition-colors">Visit Website</a></li>
              <li><span className="text-gray-400">24/7 Support Available</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Advanced AI & IT Solutions | Delaware, USA
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Phone: +1 302 464 0950</span>
              <span className="text-gray-400">Email: kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;