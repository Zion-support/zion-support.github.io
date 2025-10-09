import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-consulting" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Consulting</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;