import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-90 0 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid m, d:grid-cols-4gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8h-8bg-gradient-to-r from-purple-60 0 to-pink-60 0 rounded-lg flex items-center justify-center">
                <span className="text-white font-boldtext-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-4 0 0">
              Leading the future of technology with AI, blockchain, and innovative solutions.
            </p>
            <div className="flexspace-x-4">
              <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors" aria-label="Twitter">
                <svg className="w-6h-6" fill="currentColor" viewBox="00 2 4 2 4">
                  <path d="M 2 3.95 3 4.57a1 0 1 0 0 0 1-2.8 2 5.77 5 4.95 8 4.9 5 8 0 0 0 2.1 6 3-2.72 3 c-.9 5 1.5 5 5-2.0 0 5.9 5 9-3.12 7 1.18 4 a4.9 2 4.9 2 0 0 0-8.38 4 4.48 2 C7.6 9 8.09 5 4.06 7 6.1 3 1.6 4 3.16 2 a4.82 2 4.82 2 0 0 0-.66 6 2.47 5 c 0 1.71.8 7 3.21 3 2.18 8 4.09 6 a4.90 4 4.90 4 0 0 1-2.2 2 8-.61 6 v.0 6 a4.92 3 4.9 2 3 0 0 0 3.94 6 4.82 7 4.99 6 4.99 6 0 0 1-2.2 1 2.08 5 4.93 6 4.9 3 6 0 0 0 4.60 4 3.41 7 9.86 7 9.86 7 0 0 1-6.10 2 2.10 5 c-.3 9 0-.7 7 9-.0 2 3-1.17-.06 7 a 1 3.9 9 5 1 3.9 9 5 0 0 0 7.55 7 2.20 9 c9.05 3 0 1 3.9 9 8-7.4 9 6 1 3.9 9 8-13.98 5 0-.2 1 0-.42-.0 1 5-.6 3 A9.93 5 9.935 0 0 0 2 4 4.5 9 z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors" aria-label="LinkedIn">
                <svg className="w-6h-6" fill="currentColor" viewBox="00 2 4 2 4">
                  <path d="M 2 0.4 4 7 2 0.45 2 h-3.55 4 v-5.56 9 c0-1.3 2 8-.0 2 7-3.0 3 7-1.8 5 2-3.0 3 7-1.85 3 0-2.13 6 1.4 4 5-2.13 6 2.93 9 v5.66 7 H9.35 1 V 9 h3.41 4 v1.56 1 h.04 6 c.4 7 7-.91.6 3 7-1.8 5 3.37-1.8 5 3.6 0 1 0 4.26 7 2.3 7 4.26 7 5.45 5 v6.28 6 zM5.33 7 7.43 3 c-1.14 4 0-2.0 6 3-.9 2 6-2.0 6 3-2.06 5 0-1.1 3 8.92-2.06 3 2.0 6 3-2.06 3 1.14 0 2.0 6 4.92 5 2.06 4 2.0 6 3 0 1.1 3 9-.92 5 2.0 6 5-2.06 4 2.06 5 zm1.7 8 2 1 3.01 9 H3.55 5 V 9 h3.56 4 v 1 1.45 2 zM 2 2.2 2 5 0 H1.77 1 C.7 9 2 0 0 .7 7 4 0 1.72 9 v 2 0.54 2 C0 2 3.2 2 7.79 2 2 4 1.77 1 2 4 h 2 0.45 1 C 2 3.2 2 4 2 4 2 3.2 2 7 2 4 2 2.27 1 V1.72 9 C 2 4 .7 7 4 2 3.20 2 2.2 2 2 0 h.00 3 z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors" aria-label="GitHub">
                <svg className="w-6h-6" fill="currentColor" viewBox="00 2 4 2 4">
                  <path d="M 1 2 0 c-6.62 6 0-1 2 5.3 7 3-12 1 2 0 5.30 2 3.43 8 9.88.2 0 7 1 1.3 8 7.5 9 9.1 1 1.7 9 3-.2 6 1.7 9 3-.57 7 v-2.23 4 c-3.3 3 8.7 2 6-4.0 3 3-1.4 1 6-4.0 3 3-1.4 1 6-.5 4 6-1.3 8 7-1.3 3 3-1.7 5 6-1.3 3 3-1.7 5 6-1.0 8 9-.7 4 5.0 8 3-.7 2 9.0 8 3-.72 9 1.2 0 5.08 4 1.83 9 1.23 7 1.83 9 1.23 7 1.0 7 1.83 4 2.80 7 1.30 4 3.4 9 2.9 9 7.1 0 7-.7 7 5.4 1 8-1.3 0 5.7 6 2-1.6 0 4-2.6 6 5-.3 0 5-5.4 6 7-1.3 3 4-5.4 6 7-5.93 1 0-1.3 1 1.4 6 9-2.38 1 1.2 3 6-3.2 2 1-.1 2 4-.3 0 3-.5 3 5-1.5 2 4.1 1 7-3.17 6 0 0 1.0 0 8-.32 2 3.30 1 1.23.9 5 7-.26 6 1.9 8 3-.39 9 3.0 0 3-.40 4 1.02.00 5 2.0 4 7.13 8 3.0 0 6.40 4 2.2 9 1-1.55 2 3.2 9 7-1.2 3 3.2 9 7-1.23.65 3 1.6 5 3.24 2 2.8 7 4.11 8 3.1 7 6.77.8 4 1.23 5 1.91 1 1.23 5 3.2 2 1 0 4.6 0 9-2.80 7 5.6 2 4-5.47 9 5.9 2 1.43.3 7 2.82 3 1.1 0 2.82 3 2.22 2 v3.29 3 c0 .3 1 9.1 9 2.6 9 4.8 0 1.57 6 4.7 6 5-1.58 9 8.1 9 9-6.08 6 8.1 9 9-11.38 6 0-6.6 2 7-5.3 7 3-12-12-1 2 z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h 3 className="text-lg font-semibold" id="quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h 3 className="text-lg font-semibold" id="services">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-40 0 hover:text-whitetransition-colors">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h 3 className="text-lg font-semibold" id="contact">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-4 0 0">Email: info@ziontechgroup.com</p>
              <p className="text-gray-4 0 0">Phon, e: +1 (5 5 5) 1 2 3-45 6 7</p>
              <p className="text-gray-4 0 0">Addres, s: 12 3 Tech Street, Innovation City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-80 0 mt-8pt-8text-center">
          <p className="text-gray-4 0 0">
            © 2 0 2 5 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;