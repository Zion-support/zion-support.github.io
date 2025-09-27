import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4py-12">
        <div className="grid m  d:grid-cols-4gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-centerjustify-center">
                <span className="text-white font-boldtext-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400">
              Leading the future of technology with AI, blockchain, and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="Twitter">
                <svg className="w-6h-6" fill="currentColor" viewBox="002424">
                  <path d="M 23.9534.57a1010001-2.825.7754.9584.9580002.163-2.723 c-.951.555-2.005.959-3.1271.184 a4.924.92000-8.3844.482 C7.698.0954.0676.131.643.162 a4.8224.822000-.6662.475 c 01.71.873.2132.1884.096 a4.9044.904001-2.228-.616 v.06 a4.9234.9230003.9464.8274.9964.996001-2.212.0854.9364.9360004.6043.4179.8679.867001-6.1022.105 c-.390-.779-.023-1.17-.067 a 13.99513.9950007.5572.209 c9.053013.998-7.49613.998-13.9850-.210-.42-.015-.63 A9.9359.935000244.59 z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="LinkedIn">
                <svg className="w-6h-6" fill="currentColor" viewBox="002424">
                  <path d="M 20.44720.452 h-3.554 v-5.569 c0-1.328-.027-3.037-1.852-3.037-1.8530-2.1361.445-2.1362.939 v5.667 H9.351 V 9 h3.414 v1.561 h.046 c.477-.91.637-1.853.37-1.853.60104.2672.374.2675.455 v6.286 zM5.3377.433 c-1.1440-2.063-.926-2.063-2.0650-1.138.92-2.0632.063-2.0631.1402.064.9252.0642.06301.139-.9252.065-2.0642.065 zm1.78213.019 H3.555 V 9 h3.564 v 11.452 zM 22.2250 H1.771 C.79200 .77401.729 v 20.542 C023.227.792241.77124 h20.451 C 23.2242423.2272422.271 V1.729 C 24 .77423.2022.2220 h.003 z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="GitHub">
                <svg className="w-6h-6" fill="currentColor" viewBox="002424">
                  <path d="M 120 c-6.6260-125.373-121205.3023.4389.88.20711.387.599.111.793-.261.793-.577 v-2.234 c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.7291.205.0841.8391.2371.8391.2371.071.8342.8071.3043.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.9310-1.311.469-2.3811.236-3.221-.124-.303-.535-1.524.117-3.176001.008-.3223.3011.23.957-.2661.983-.3993.003-.4041.02.0052.047.1383.006.4042.291-1.5523.297-1.233.297-1.23.6531.653.2422.874.1183.176.77.841.2351.9111.2353.22104.609-2.8075.624-5.4795.921.43.372.8231.102.8232.222 v3.293 c0 .319.192.694.801.5764.765-1.5898.199-6.0868.199-11.3860-6.627-5.373-12-12-12 z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" id="quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-whitetransition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-whitetransition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-whitetransition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" id="services">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" id="contact">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: info@ziontechgroup.com</p>
              <p className="text-gray-400">Phon, e: +1 (555) 123-4567</p>
              <p className="text-gray-400">Addres, s: 123 Tech Street, Innovation City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8pt-8text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;