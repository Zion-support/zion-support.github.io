import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function EnhancedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}