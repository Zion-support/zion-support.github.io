import React from 'react';
import { Link } from 'react-router-dom';

export const SimpleFooter: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400">Zion Tech Group</h3>
            <p className="text-gray-300">
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</Link></li>
              <li><Link to="/cloud-devops" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/healthcare" className="text-gray-300 hover:text-cyan-400 transition-colors">Healthcare Tech</Link></li>
              <li><Link to="/financial" className="text-gray-300 hover:text-cyan-400 transition-colors">Financial Solutions</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-cyan-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/retail" className="text-gray-300 hover:text-cyan-400 transition-colors">Retail Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Phone: +1 302 464 0950</p>
              <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Empowering Innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">Sitemap</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">Accessibility</Link>
              <Link to="/status" className="text-gray-400 hover:text-cyan-400 transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};