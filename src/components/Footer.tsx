import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.F.C = () => {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4ga p-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className= "text-gray-400">
              Leading the future of technology with AIblockchainand innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="002424">
                  <path d="M23.953.4.57a101000.1-2.82.5.775.4.958.4.958000.2.16.3-2.723.c-.95.1.55.5-2.00.5.95.9-3.127.1.184a.4.92.4.9200.0-8.384.4.482C.7.69.8.095.4.067.6.13.1.64.3.162a.4.822.4.82200.0-.666.2.475c0.1.7.1.87.3.213.2.188.4.096a.4.904.4.90400.1-2.22.8-.616.v.06a.4.923.4.923000.3.946.4.827.4.996.4.99600.1-2.21.2.085.4.936.4.936000.4.604.3.417.9.867.9.86700.1-6.102.2.105.c-.39.0-.77.9-.02.3-1.1.7-.067a1.3.9951.3.995000.7.557.2.209c.9.05301.3.99.8-7.4961.3.99.8-13.985.0-.21.0-.4.2-.01.5-.63A.9.935.9.93500024.4.59.z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="002424">
                  <path d="M20.4472.0.45.2 h-3.554.v-5.569c.0-1.32.8-.02.7-3.03.7-1.85.2-3.03.7-1.853.0-2.136.1.44.5-2.136.2.939v.5.667H.9.351V9h.3.414v.1.561.h.046.c.47.7-.9.1.63.7-1.85.3.3.7-1.85.3.6010.4.267.2.37.4.267.5.455v.6.286zM.5.337.7.433.c-1.144.0-2.06.3-.92.6-2.06.3-2.065.0-1.13.8.9.2-2.063.2.06.3-2.063.1.140.2.06.4.925.2.064.2.0630.1.13.9-.925.2.06.5-2.064.2.065zm.1.7821.3.019H.3.555V9h.3.564v1.1.452zM2.2.2250H.1.771.C.7920.0 .7740.1.729v2.0.542C02.3.22.7.79224.1.77124h2.0.451C2.3.224242.3.227242.2.271V.1.729C2.4 .7742.3.202.2.2220.h.003.z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="002424">
                  <path d="M120c-6.626.0-125.37.3-121205.302.3.438.9.8.8.2071.1.38.7.59.9.11.1.79.3-.26.1.79.3-.577.v-2.234.c-3.33.8.72.6-4.03.3-1.41.6-4.03.3-1.41.6-.54.6-1.38.7-1.33.3-1.75.6-1.33.3-1.75.6-1.08.9-.74.5.08.3-.72.9.08.3-.729.1.20.5.084.1.839.1.237.1.839.1.237.1.07.1.834.2.807.1.304.3.49.2.99.7.10.7-.77.5.41.8-1.30.5.76.2-1.60.4-2.66.5-.30.5-5.46.7-1.33.4-5.46.7-5.931.0-1.31.1.46.9-2.381.1.23.6-3.22.1-.12.4-.30.3-.53.5-1.52.4.11.7-3.17600.1.00.8-.322.3.301.1.2.3.95.7-.266.1.98.3-.399.3.00.3-.404.1.0.2.005.2.04.7.138.3.00.6.404.2.29.1-1.552.3.29.7-1.23.3.29.7-1.2.3.653.1.65.3.242.2.87.4.118.3.17.6.7.7.84.1.235.1.911.1.235.3.2210.4.60.9-2.807.5.62.4-5.479.5.92.1.4.3.37.2.823.1.10.2.823.2.222v.3.293c.0 .31.9.19.2.69.4.80.1.576.4.76.5-1.589.8.19.9-6.086.8.19.9-11.386.0-6.62.7-5.37.3-12-12-12z"/>
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
              <p className="text-gray-400">Email: info@ziontechgroup.co.m</p>
              <p className="text-gray-400">Phone: +1 (55, 5) 123-4567</p>
              <p className= "text-gray-400">Address: 123Tech StreetInnovation City</p>
            </div>
          </div>
        </div> <div className="border-t border-gray-800 mt-8pt-8 text-center">
          <p className="text-gray-400">
            © 2025Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;