import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous
              systems. Transforming businesses with cutting-edge technology.
            </p>
            <div className="text-gray-300 mb-6">
              <div className="flex items-center mb-2">
                <span className="mr-2">📍</span>
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">AI Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/ai-services" className="hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link to="/ai-services" className="hover:text-white transition-colors">Natural Language Processing</Link></li>
              <li><Link to="/ai-services" className="hover:text-white transition-colors">Computer Vision</Link></li>
              <li><Link to="/ai-services" className="hover:text-white transition-colors">Quantum Computing</Link></li>
              <li><Link to="/ai-services" className="hover:text-white transition-colors">Autonomous Systems</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">IT Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/it-services" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/it-services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/it-services" className="hover:text-white transition-colors">DevOps & CI/CD</Link></li>
              <li><Link to="/it-services" className="hover:text-white transition-colors">Blockchain & Web3</Link></li>
              <li><Link to="/it-services" className="hover:text-white transition-colors">5G Networks</Link></li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SAAS</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">Analytics Dashboard</Link></li>
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">Document Processing</Link></li>
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">Email Marketing</Link></li>
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">Inventory Management</Link></li>
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">HR Assistant</Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/services-advertising" className="hover:text-white transition-colors">Advertising</Link></li>
              <li><Link to="/micro-saas" className="hover:text-white transition-colors">Micro SAAS</Link></li>
              <li><Link to="/ai-services" className="hover:text-white transition-colors">AI Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Get Started</h4>
            <div className="space-y-3">
              <Link to="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Free Consultation
              </Link>
              <Link to="/enterprise" className="block border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-colors text-center">
                Enterprise Solutions
              </Link>
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
