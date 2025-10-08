import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and comprehensive IT services. Transforming businesses with cutting-edge technology.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/ai-marketing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Marketing
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/quantum-computing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact & Support</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Business Hours</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>Mon-Fri: 8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Why Choose Us?</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>500+ Successful Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>24/7 Expert Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="hover:text-white transition-colors">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/quantum-computing" className="hover:text-white transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/autonomous-systems" className="hover:text-white transition-colors">
                  Autonomous Systems
                </Link>
              </li>
              <li>
                <Link to="/business-intelligence" className="hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/blockchain-web3" className="hover:text-white transition-colors">
                  Blockchain & Web3
                </Link>
              </li>
              <li>
                <Link to="/iot-edge-computing" className="hover:text-white transition-colors">
                  IoT & Edge Computing
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
              <p>Website: ziontechgroup.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>origin/main
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and comprehensive IT services. Transforming businesses through cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-blue-400" />
                    Micro SAAS Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-400" />
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-blue-400" />
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
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
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

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-gray-300 hover:text-white transition-colors">
                    Technical Guides
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://docs.ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
