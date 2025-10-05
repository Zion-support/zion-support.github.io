import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of AI and technology solutions. We help businesses transform 
              their operations with cutting-edge artificial intelligence and innovative technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/zion-tech-group"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services/machine-learning" className="text-gray-300 hover:text-white transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-300 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;