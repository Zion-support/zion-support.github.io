import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function EnhancedFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">5G Solutions</Link></li>
              <li><Link to="/enterprise-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}