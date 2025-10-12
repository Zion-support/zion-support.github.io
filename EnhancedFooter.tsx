
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="b g-s late-900 border-t border-slate-800">
      <div className="m a x-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-12">
        <div className="g r id grid-cols-1 md:grid-cols-4  gap-8">
          <div className="c o l-span-1 md:col-span-2">
            <h3 className="t e xt-2xl font-bold text-white  mb-4">Zion Tech Group</h3>
            <p className="t e xt-gray-300  mb-6">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <div className="f l ex  space-x-4">
              <Link
                to="/contact"
                className="b g-g radient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex  items-center"
              >
                Get Started
                <ArrowRight className="$2" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="t e xt-lg font-semibold text-white  mb-4">Services</h4>
            <ul className="s p ace-y-2">
              <li><Link to="/ai-solutions" className="t e xt-gray-300 hover:text-cyan-400  transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="t e xt-gray-300 hover:text-cyan-400  transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="t e xt-gray-300 hover:text-cyan-400  transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="t e xt-gray-300 hover:text-cyan-400  transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="t e xt-lg font-semibold text-white  mb-4">Contact</h4>
            <div className="s p ace-y-3">
              <div className="f l ex items-center  text-gray-300">
                <Mail className="$2" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="f l ex items-center  text-gray-300">
                <Phone className="$2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="f l ex items-center  text-gray-300">
                <MapPin className="$2" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="b o rder-t border-slate-800 mt-8 pt-8  text-center">
          <p className="t e xt-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  );
};
export default EnhancedFooter;
