import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                LinkedIn
              </Link>
              <Link to="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Twitter
              </Link>
              <Link to="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;