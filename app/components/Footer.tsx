import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous
              systems. Transforming businesses with cutting-edge technology.
            </p>
            <div className="text-gray-300">
              <p className="flex items-center mb-2">
                <span className="mr-2">📍</span>
                364 E Main St STE 1008
              </p>
              <p className="ml-6">Middletown, DE 19709</p>
              <p className="ml-6">United States</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services-advertising" className="text-gray-300 hover:text-white transition-colors">
                  AI Advertising
                </Link>
              </li>
              <li className="text-gray-300">Quantum Computing</li>
              <li className="text-gray-300">Autonomous Systems</li>
              <li className="text-gray-300">Business Intelligence</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                contact@ziontechgroup.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +1 (302) 600-9898
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌐</span>
                ziontechgroup.com
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors text-2xl" aria-label="LinkedIn">
                  💼
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors text-2xl" aria-label="Twitter">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
