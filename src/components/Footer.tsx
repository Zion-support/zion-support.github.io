import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge
              technology solutions that transform businesses and drive innovation.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">📧 kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">📞 +1 302 464 0950</p>
              <p className="text-gray-400 text-sm">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ai" className="text-gray-400 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-migration" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link to="/services/devops" className="text-gray-400 hover:text-white transition-colors">
                  DevOps & SRE
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;