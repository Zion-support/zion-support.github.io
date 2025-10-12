import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="b g-slate-900 border-t border-slate-800">
      <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="gri d grid-cols-1 md:grid-cols-4 gap-8">
          <div className="co l-span-1 md:col-span-2">
            <h3 className="tex t-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="tex t-gray-300 mb-6">
              Leading provider of AI and IT solutions for businesses worldwide.
    <>
            </p>
            <div className="fle x space-x-4">
              <Link
                to="/contact"
                className="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 m l-2" />
              </Link>
            </div>
          
          <div>
            <h4 className="tex t-lg font-semibold text-white mb-4">Services</h4>
            <ul className="spac e-y-2">
              <li><Link to="/ai-solutions" className="tex t-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="tex t-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="tex t-gray-300 hover:text-cyan-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="tex t-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="tex t-lg font-semibold text-white mb-4">Contact</h4>
            <div className="spac e-y-3">
              <div className="fle x items-center text-gray-300">
                <Mail className="w-4 h-4 m r-2" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="fle x items-center text-gray-300">
                <Phone className="w-4 h-4 m r-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="fle x items-center text-gray-300">
                <MapPin className="w-4 h-4 m r-2" />
                <span>New York, NY</span>
              </div>
          </div>
        
        <div className="borde r-t border-slate-800 mt-8 pt-8 text-center">
          <p className="tex t-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default EnhancedFooter;
    </>
