import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Globe, Award, Shield, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and innovative micro SAAS tools that transform businesses worldwide.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Micro SAAS Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Award className="w-4 h-4 mr-2 text-purple-400" />
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/quantum-computing" className="text-gray-300 hover:text-white transition-colors">
                    Quantum Computing
                  </Link>
                </li>
                <li>
                  <Link to="/autonomous-systems" className="text-gray-300 hover:text-white transition-colors">
                    Autonomous Systems
                  </Link>
                </li>
                <li>
                  <Link to="/blockchain-web3" className="text-gray-300 hover:text-white transition-colors">
                    Blockchain & Web3
                  </Link>
                </li>
                <li>
                  <Link to="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link to="/business-intelligence" className="text-gray-300 hover:text-white transition-colors">
                    Business Intelligence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions & Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Solutions & Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/iot-edge-computing" className="text-gray-300 hover:text-white transition-colors">
                    IoT & Edge Computing
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-gray-300 hover:text-white transition-colors">
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Get In Touch</h4>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-blue-400">Free Consultation</h5>
                  <p className="text-sm text-gray-300 mb-3">
                    Get a free 30-minute consultation to discuss your project needs.
                  </p>
                  <a 
                    href="tel:+13024640950" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Schedule Now
                  </a>
                </div>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-blue-400">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/ziontechgroup" 
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/ziontechgroup" 
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-green-400">Why Choose Us?</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 24/7 Expert Support</li>
                    <li>• Enterprise-Grade Security</li>
                    <li>• Proven ROI Results</li>
                    <li>• Cutting-Edge Technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Proudly serving clients worldwide since 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
