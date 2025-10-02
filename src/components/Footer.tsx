import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/ZionClouds" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/services/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/services/ai-compliance-monitor" className="text-gray-400 hover:text-white transition-colors">AI Compliance Monitor</Link></li>
              <li><Link to="/services/seo-split-testing" className="text-gray-400 hover:text-white transition-colors">SEO Split Testing</Link></li>
              <li><Link to="/services/image-cdn-optimizer" className="text-gray-400 hover:text-white transition-colors">Image CDN Optimizer</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">All Solutions</Link></li>
              <li><Link to="/solutions/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/solutions/smb" className="text-gray-400 hover:text-white transition-colors">SMB</Link></li>
              <li><Link to="/solutions/startup" className="text-gray-400 hover:text-white transition-colors">Startup</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </p>
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;