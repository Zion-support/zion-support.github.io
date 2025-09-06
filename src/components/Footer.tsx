import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading technology solutions for modern businesses. We provide comprehensive micro SaaS, AI, IT, blockchain, and data analytics services.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">📧 kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">📞 +1 302 464 0950</p>
              <p className="text-gray-400 text-sm">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/services/blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain</Link></li>
              <li><Link to="/services/data-analytics" className="text-gray-400 hover:text-white transition-colors">Data Analytics</Link></li>
