import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Wifi, Cloud, Shield, FileText, Users, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech Group</span>
                <p className="text-xs text-cyan-400 -mt-1">Advanced AI & IT Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors group">
                <span className="text-white font-bold group-hover:scale-110 transition-transform">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors group">
                <span className="text-white font-bold group-hover:scale-110 transition-transform">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors group">
                <span className="text-white font-bold group-hover:scale-110 transition-transform">in</span>
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>AI Solutions</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/ai-analytics-dashboard-pro" className="text-gray-400 hover:text-cyan-400 transition-colors">Analytics Dashboard Pro</Link></li>
              <li><Link to="/ai-code-assistant-pro" className="text-gray-400 hover:text-cyan-400 transition-colors">Code Assistant Pro</Link></li>
              <li><Link to="/ai-voice-assistant-enterprise" className="text-gray-400 hover:text-cyan-400 transition-colors">Voice Assistant Enterprise</Link></li>
              <li><Link to="/ai-cybersecurity-platform" className="text-gray-400 hover:text-cyan-400 transition-colors">Cybersecurity Platform</Link></li>
              <li><Link to="/ai-automation-suite" className="text-gray-400 hover:text-cyan-400 transition-colors">Automation Suite</Link></li>
              <li><Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">View All AI Solutions →</Link></li>
            </ul>
          </div>

          {/* 5G & Cloud */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-cyan-400" />
              <span>5G & Cloud</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/5g-implementation" className="text-gray-400 hover:text-cyan-400 transition-colors">5G Implementation</Link></li>
              <li><Link to="/5g-iot-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">5G IoT Solutions</Link></li>
              <li><Link to="/5g-smart-city-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">Smart City Solutions</Link></li>
              <li><Link to="/cloud-services" className="text-gray-400 hover:text-cyan-400 transition-colors">Cloud Services</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/5g-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">View All 5G Solutions →</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Legal</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookies Policy</Link></li>
              <li><Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;